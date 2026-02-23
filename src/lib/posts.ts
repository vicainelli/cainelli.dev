import { getCollection } from "astro:content";

export async function getNonDraftPosts({ limit }: { limit?: number } = {}) {
	const allWritingPosts = await getCollection("writing");
	const nonDraftPosts = allWritingPosts.filter((post) => !post.data.draft);
	const sortedPosts = nonDraftPosts.sort(
		(a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime(),
	);
	return limit ? sortedPosts.slice(0, limit) : sortedPosts;
}
