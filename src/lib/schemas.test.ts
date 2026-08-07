import { describe, expect, it } from "vitest";
import { CollectionProjectSchema } from "./schemas";

describe("CollectionProjectSchema", () => {
	it("accepts a valid project frontmatter with all fields", () => {
		const data = {
			title: "Test Project",
			description: "A test project",
			pubDate: "2026-08-07",
			draft: false,
			author: "Vinicius Cainelli",
			tags: ["astro", "tooling"],
			url: "https://example.com",
			repoUrl: "https://github.com/example/test",
		};

		const result = CollectionProjectSchema.parse(data);
		expect(result.title).toBe("Test Project");
		expect(result.draft).toBe(false);
		expect(result.pubDate).toBeInstanceOf(Date);
	});

	it("accepts a minimal project frontmatter with defaults", () => {
		const data = {
			title: "Minimal Project",
			pubDate: "2026-08-07",
		};

		const result = CollectionProjectSchema.parse(data);
		expect(result.draft).toBe(true);
		expect(result.tags).toBeUndefined();
	});

	it("rejects missing title", () => {
		const data = { pubDate: "2026-08-07" };
		expect(() => CollectionProjectSchema.parse(data)).toThrow();
	});

	it("rejects missing pubDate", () => {
		const data = { title: "No Date Project" };
		expect(() => CollectionProjectSchema.parse(data)).toThrow();
	});

	it("accepts null or missing url and repoUrl", () => {
		const withNullUrls = {
			title: "Project with null urls",
			pubDate: "2026-08-07",
			url: null,
			repoUrl: null,
		};

		const withoutUrls = {
			title: "Project without urls",
			pubDate: "2026-08-07",
		};

		expect(() => CollectionProjectSchema.parse(withNullUrls)).not.toThrow();
		expect(() => CollectionProjectSchema.parse(withoutUrls)).not.toThrow();
	});
});
