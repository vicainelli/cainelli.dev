import { z } from "zod";

export const BaseContentFields = {
	title: z.string(),
	description: z.string().optional(),
	pubDate: z.coerce.date(),
};

export const CollectionProjectSchema = z.object({
	...BaseContentFields,
	draft: z.boolean().default(true),
	author: z.string().optional(),
	tags: z.array(z.string()).optional(),
	url: z.string().optional().nullable(),
	repoUrl: z.string().optional().nullable(),
});

export type CollectionProjectType = z.infer<typeof CollectionProjectSchema>;
