import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// New (2026+) writing. Restored historical posts must NOT go here; they belong to the archive.
const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    topics: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { writing };
