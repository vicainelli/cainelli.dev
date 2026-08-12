import { z } from "zod";

const tokenSchema = z.object({
	access_token: z.string().min(1),
});

const historySchema = z.object({
	items: z.array(
		z.object({
			played_at: z.iso.datetime(),
			track: z.object({
				name: z.string().min(1),
				artists: z.array(z.object({ name: z.string().min(1) })).min(1),
				album: z.object({
					images: z.array(z.object({ url: z.url() })).min(1),
				}),
				external_urls: z.object({
					spotify: z
						.url()
						.refine((url) => url.startsWith("https://open.spotify.com/")),
				}),
			}),
		}),
	),
});

export interface SpotifyCredentials {
	clientId: string;
	clientSecret: string;
	refreshToken: string;
}

export interface LatestTrack {
	name: string;
	artists: string[];
	coverUrl: string;
	spotifyUrl: string;
	playedAt: string;
}

export class SpotifyUnavailableError extends Error {
	constructor() {
		super("Spotify is unavailable");
		this.name = "SpotifyUnavailableError";
	}
}

async function parseJson(response: Response): Promise<unknown> {
	if (!response.ok) {
		throw new SpotifyUnavailableError();
	}

	try {
		return await response.json();
	} catch {
		throw new SpotifyUnavailableError();
	}
}

export async function getLatestTrack(
	credentials: SpotifyCredentials,
	fetcher: typeof globalThis.fetch = globalThis.fetch,
): Promise<LatestTrack | null> {
	try {
		const tokenResponse = await fetcher(
			"https://accounts.spotify.com/api/token",
			{
				method: "POST",
				headers: {
					Authorization: `Basic ${btoa(`${credentials.clientId}:${credentials.clientSecret}`)}`,
					"Content-Type": "application/x-www-form-urlencoded",
				},
				body: new URLSearchParams({
					grant_type: "refresh_token",
					refresh_token: credentials.refreshToken,
				}).toString(),
			},
		);
		const token = tokenSchema.safeParse(await parseJson(tokenResponse));
		if (!token.success) {
			throw new SpotifyUnavailableError();
		}

		const historyResponse = await fetcher(
			"https://api.spotify.com/v1/me/player/recently-played?limit=1",
			{ headers: { Authorization: `Bearer ${token.data.access_token}` } },
		);
		const history = historySchema.safeParse(await parseJson(historyResponse));
		if (!history.success) {
			throw new SpotifyUnavailableError();
		}

		const item = history.data.items[0];
		if (!item) {
			return null;
		}

		return {
			name: item.track.name,
			artists: item.track.artists.map(({ name }) => name),
			coverUrl: item.track.album.images[0].url,
			spotifyUrl: item.track.external_urls.spotify,
			playedAt: item.played_at,
		};
	} catch (error) {
		if (error instanceof SpotifyUnavailableError) {
			throw error;
		}

		throw new SpotifyUnavailableError();
	}
}
