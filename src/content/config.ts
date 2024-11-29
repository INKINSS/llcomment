import { defineCollection, z, } from 'astro:content';

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        id: z.string().uuid().default(() => crypto.randomUUID()),
        title: z.string(),
        nickname: z.string().optional(),
        tags: z.array(z.string()),
        content: z.string(),
        publishDate: z.date().default(() => new Date()),
    }),
});

export const collections: Record<string, ReturnType<typeof defineCollection>> = {
    blog: blogCollection,
};
