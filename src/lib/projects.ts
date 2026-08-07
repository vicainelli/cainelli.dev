export interface ProjectLike {
	data: {
		draft: boolean;
		pubDate: Date;
	};
}

export function filterAndSortProjects<T extends ProjectLike>(
	projects: T[],
): T[] {
	return projects
		.filter((project) => !project.data.draft)
		.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}
