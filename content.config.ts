import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog.yml',
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        seo: z.object({
          title: z.string().optional(),
          description: z.string().optional()
        }).optional()
      })
    }),

    posts: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        image: z.any().optional(),
        badge: z.any().optional(),
        authors: z.array(z.any()).optional(),
        seo: z.object({
          title: z.string().optional(),
          description: z.string().optional()
        }).optional()
      })
    })
  }
})