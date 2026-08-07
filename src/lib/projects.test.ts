import { describe, expect, it } from "vitest";
import { filterAndSortProjects } from "./projects";

describe("filterAndSortProjects", () => {
	it("returns only non-draft projects sorted by pubDate descending", () => {
		const projects = [
			{
				id: "older",
				data: { draft: false, pubDate: new Date("2026-01-01"), title: "Older" },
			},
			{
				id: "draft",
				data: { draft: true, pubDate: new Date("2026-03-01"), title: "Draft" },
			},
			{
				id: "newer",
				data: { draft: false, pubDate: new Date("2026-02-01"), title: "Newer" },
			},
		];

		const result = filterAndSortProjects(projects);
		expect(result.map((project) => project.id)).toEqual(["newer", "older"]);
	});

	it("returns an empty array when all projects are drafts", () => {
		const projects = [
			{
				id: "draft",
				data: { draft: true, pubDate: new Date("2026-01-01"), title: "Draft" },
			},
		];

		const result = filterAndSortProjects(projects);
		expect(result).toEqual([]);
	});
});
