import type { APIRoute } from "astro";
import { getLatestTrack, type LatestTrack } from "../../../lib/spotify";

export const prerender = false;

type LatestTrackProvider = () => Promise<LatestTrack | null>;
type TrackCache = Pick<Cache, "match" | "put">;

function unavailableResponse() {
	return new Response(null, {
		status: 204,
		headers: { "Cache-Control": "no-store" },
	});
}

export function createRecentTrackHandler(
	getTrack: LatestTrackProvider,
	cache: TrackCache,
) {
	return async (request: Request): Promise<Response> => {
		try {
			const cachedResponse = await cache.match(request);
			if (cachedResponse) {
				return cachedResponse;
			}

			const track = await getTrack();
			if (!track) {
				return new Response(null, {
					status: 204,
					headers: { "Cache-Control": "no-store" },
				});
			}

			const response = Response.json(track, {
				headers: { "Cache-Control": "public, max-age=0, s-maxage=900" },
			});
			await cache.put(request, response.clone());

			return response;
		} catch {
			return unavailableResponse();
		}
	};
}

export const GET: APIRoute = async ({ request }) => {
	const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } =
		await import("astro:env/server");
	if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET || !SPOTIFY_REFRESH_TOKEN) {
		return unavailableResponse();
	}

	const cloudflareCache = (caches as CacheStorage & { default: Cache }).default;
	const handleRecentTrack = createRecentTrackHandler(
		() =>
			getLatestTrack({
				clientId: SPOTIFY_CLIENT_ID,
				clientSecret: SPOTIFY_CLIENT_SECRET,
				refreshToken: SPOTIFY_REFRESH_TOKEN,
			}),
		cloudflareCache,
	);

	return handleRecentTrack(request);
};
