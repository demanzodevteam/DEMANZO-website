import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    // add more fields as needed
  }),
});

export const collections = {
  blog, // this enables `"blog"` as a collection name
};
