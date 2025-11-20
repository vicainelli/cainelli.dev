import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import path from "path";
import { fileURLToPath } from "url";
import type { z as zod } from "zod";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const CollectionWorkSchema = z.object({
	title: z.string(),
	description: z.string().optional(),
	pubDate: z.coerce.date(),
	draft: z.boolean().default(true),
	tags: z.array(z.string()).optional(),
	role: z.string().optional(),
	location: z.string().optional(),
	periodStart: z.date().optional(),
	periodEnd: z.date().optional(),
	company: z.string().optional(),
	companyUrl: z.string().optional(),
	techStack: z.array(z.string()).optional(),
	updatedDate: z.date().optional(),
	companyLogo: z.string().optional(),
	coverImage: z.string().optional(),
	logoBackground: z.string().optional(),
	current: z.boolean().default(false),
});

const work = defineCollection({
	loader: glob({
		pattern: "*.{md,mdx}",
		base: path.join(__dirname, "content", "work"),
	}),
	schema: CollectionWorkSchema,
});

// const writing = defineCollection({
//   loader: glob({
//     pattern: '*.mdx',
//     base: path.join(__dirname, 'content', 'writing')
//   }),
//   schema: z.object({
//     title: z.string(),
//     description: z.string().optional(),
//     pubDate: z.date(),
//     draft: z.boolean().default(false),
//     tags: z.array(z.string()).optional(),
//     author: z.string().optional(),
//     updatedDate: z.date().optional(),
//     readingTime: z.number().optional(),
//     cover: z.string().optional(),
//     coverAlt: z.string().optional(),
//   }),
// });
//

const CollectionTilSchema = z.object({
	title: z.string(),
	description: z.string().optional(),
	pubDate: z.coerce.date(),
	draft: z.boolean().default(true),
	author: z.string().optional(),
	tags: z.array(z.string()).optional(),
	category: z
		.enum(["javascript", "typescript", "css", "react", "astro", "git", "other"])
		.optional(),
	snippet: z.boolean().default(false),
});

export type CollectionTilType = zod.infer<typeof CollectionTilSchema>;

const til = defineCollection({
	loader: glob({
		pattern: "**/*.{md,mdx}",
		base: path.join(__dirname, "content", "til"),
	}),
	schema: CollectionTilSchema,
});

export const collections = {
	work,
	// writing,
	til,
};
