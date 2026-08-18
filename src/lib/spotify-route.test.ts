import { describe, expect, it, vi } from "vitest";
import { createRecentTrackHandler } from "../pages/api/spotify/recent.json";
import { SpotifyUnavailableError } from "./spotify";

const track = {
	name: "Long Song",
	artists: ["Artist One", "Artist Two"],
	coverUrl: "https://i.scdn.co/image/cover",
	spotifyUrl: "https://open.spotify.com/track/track-id",
	playedAt: "2026-08-12T10:00:00.000Z",
};

const request = new Request("https://cainelli.dev/api/spotify/recent.json");
const emptyCache = () => ({
	match: vi.fn().mockResolvedValue(undefined),
	put: vi.fn().mockResolvedValue(undefined),
});

describe("recent Spotify track endpoint", () => {
	it("returns the public track with a 15-minute Cloudflare cache policy", async () => {
		const cache = emptyCache();
		const handler = createRecentTrackHandler(
			vi.fn().mockResolvedValue(track),
			cache,
		);
		const response = await handler(request);

		expect(response.status).toBe(200);
		expect(await response.json()).toEqual(track);
		expect(response.headers.get("Cache-Control")).toBe(
			"public, max-age=0, s-maxage=900",
		);
		expect(cache.put).toHaveBeenCalledWith(request, expect.any(Response));
	});

	it("serves a cached track without calling Spotify", async () => {
		const cachedResponse = Response.json(track);
		const cache = {
			match: vi.fn().mockResolvedValue(cachedResponse),
			put: vi.fn(),
		};
		const getTrack = vi.fn();
		const handler = createRecentTrackHandler(getTrack, cache);

		const response = await handler(
			new Request("https://cainelli.dev/api/spotify/recent.json"),
		);

		expect(await response.json()).toEqual(track);
		expect(getTrack).not.toHaveBeenCalled();
		expect(cache.put).not.toHaveBeenCalled();
	});

	it("returns 204 without caching when there is no listening history", async () => {
		const handler = createRecentTrackHandler(
			vi.fn().mockResolvedValue(null),
			emptyCache(),
		);

		const response = await handler(request);

		expect(response.status).toBe(204);
		expect(response.headers.get("Cache-Control")).toBe("no-store");
	});

	it("returns an empty response for integration failures", async () => {
		const handler = createRecentTrackHandler(
			vi.fn().mockRejectedValue(new SpotifyUnavailableError()),
			emptyCache(),
		);

		const response = await handler(request);

		expect(response.status).toBe(204);
		expect(response.headers.get("Cache-Control")).toBe("no-store");
		expect(await response.text()).toBe("");
	});
});
