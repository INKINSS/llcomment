import { defineCollection, z, } from 'astro:content';

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        id: z.string().uuid().default(() => crypto.randomUUID()),
        nickname: z.string().default('anonimo'),
        title: z.string(),
        tags: z.string(),
        publishDate: z.date().default(() => new Date()),
        content: z.string(),
    }),
});

export const collections: Record<string, ReturnType<typeof defineCollection>> = {
    blog: blogCollection,
};
