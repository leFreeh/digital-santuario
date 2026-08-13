import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const objects = defineCollection({
    loader: glob({
        pattern: '**/*.mdx',
        base: './src/content/objects',
    }),

    schema: z.object({
        name: z.string(),
        date: z.coerce.date(),
        tags: z.array(z.string()).default([]),
        image: z.string(),
    }),
});

export const collections = {
    objects,
};