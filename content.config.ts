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
        image: z.object({
          src: z.string(),
          alt: z.string().optional()
        }).optional(),
        badge: z.object({
          label: z.string()
        }).optional(),
        authors: z.array(
          z.object({
            name: z.string(),
            to: z.string().optional(),
            avatar: z.object({
              src: z.string()
            }).optional()
          })
        ).optional(),
        seo: z.object({
          title: z.string().optional(),
          description: z.string().optional()
        }).optional()
      })
    })
  }
})