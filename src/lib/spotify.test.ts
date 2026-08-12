import { describe, expect, it, vi } from "vitest";
import { getLatestTrack, SpotifyUnavailableError } from "./spotify";

const credentials = {
	clientId: "client-id",
	clientSecret: "client-secret",
	refreshToken: "refresh-token",
};

describe("getLatestTrack", () => {
	it("refreshes authorization and returns the minimal latest-track contract", async () => {
		const fetch = vi
			.fn<typeof globalThis.fetch>()
			.mockResolvedValueOnce(
				Response.json({ access_token: "access-token", token_type: "Bearer" }),
			)
			.mockResolvedValueOnce(
				Response.json({
					items: [
						{
							played_at: "2026-08-12T10:00:00.000Z",
							track: {
								name: "Long Song",
								artists: [{ name: "Artist One" }, { name: "Artist Two" }],
								album: {
									images: [{ url: "https://i.scdn.co/image/cover" }],
								},
								external_urls: {
									spotify: "https://open.spotify.com/track/track-id",
								},
							},
						},
					],
				}),
			);

		await expect(getLatestTrack(credentials, fetch)).resolves.toEqual({
			name: "Long Song",
			artists: ["Artist One", "Artist Two"],
			coverUrl: "https://i.scdn.co/image/cover",
			spotifyUrl: "https://open.spotify.com/track/track-id",
			playedAt: "2026-08-12T10:00:00.000Z",
		});

		const tokenRequest = fetch.mock.calls[0];
		expect(tokenRequest?.[0]).toBe("https://accounts.spotify.com/api/token");
		expect(tokenRequest?.[1]).toMatchObject({
			method: "POST",
			headers: {
				Authorization: `Basic ${btoa("client-id:client-secret")}`,
				"Content-Type": "application/x-www-form-urlencoded",
			},
			body: "grant_type=refresh_token&refresh_token=refresh-token",
		});
		expect(fetch.mock.calls[1]?.[0]).toBe(
			"https://api.spotify.com/v1/me/player/recently-played?limit=1",
		);
	});

	it("returns null when Spotify has no listening history", async () => {
		const fetch = vi
			.fn<typeof globalThis.fetch>()
			.mockResolvedValueOnce(Response.json({ access_token: "access-token" }))
			.mockResolvedValueOnce(Response.json({ items: [] }));

		await expect(getLatestTrack(credentials, fetch)).resolves.toBeNull();
	});

	it.each([
		["token failure", new Response("secret upstream body", { status: 401 })],
		["rate limiting", new Response("retry later", { status: 429 })],
	])("returns a controlled error for %s", async (_name, response) => {
		const fetch = vi.fn<typeof globalThis.fetch>().mockResolvedValue(response);

		await expect(getLatestTrack(credentials, fetch)).rejects.toEqual(
			new SpotifyUnavailableError(),
		);
	});

	it("returns a controlled error for malformed history", async () => {
		const fetch = vi
			.fn<typeof globalThis.fetch>()
			.mockResolvedValueOnce(Response.json({ access_token: "access-token" }))
			.mockResolvedValueOnce(
				Response.json({ items: [{ track: { name: 42 } }] }),
			);

		await expect(getLatestTrack(credentials, fetch)).rejects.toEqual(
			new SpotifyUnavailableError(),
		);
	});
});
