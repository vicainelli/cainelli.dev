import { defineCollection. z } from 'astro:content';
import { z as zod } from 'zod';
import { glob } from 'astro/loaders';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));


// const work = defineCollection({
//   loader: glob({
//     pattern: '*.{md,mdx}',
//     base: path.join(__dirname, 'content', 'work')
//   }),
//   schema: z.object({
//     title: z.string(),
//     pubDate: z.date(),
//     description: z.string().optional(),
//     draft: z.boolean().default(false),
//     tags: z.array(z.string()).optional(),
//     client: z.string().optional(),
//     role: z.string().optional(),
//     status: z.enum(['completed', 'ongoing', 'archived']).optional(),
//     technologies: z.array(z.string()).optional(),
//     updatedDate: z.date().optional(),
//   }),
// });

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
    .enum(['javascript', 'typescript', 'css', 'react', 'astro', 'git', 'other'])
    .optional(),
  snippet: z.boolean().default(false),
});

export type CollectionTilType = zod.infer<typeof CollectionTilSchema>;

const til = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: path.join(__dirname, 'content', 'til')
  }),
  schema: CollectionTilSchema,
});

export const collections = {
  // work,
  // writing,
  til,
};
