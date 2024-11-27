import { defineCollection, z, } from 'astro:content';

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        id: z.string().uuid().default(() => crypto.randomUUID()),
        publishDate: z.date().default(() => new Date()),
        title: z.string(),
        tags: z.string(),
        content: z.string(),
    }),
});

export const collections: Record<string, ReturnType<typeof defineCollection>> = {
    blog: blogCollection,
};
