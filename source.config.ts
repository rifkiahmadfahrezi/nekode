import { defineDocs, defineConfig } from 'fumadocs-mdx/config';
import z from 'zod'

export const docs = defineDocs({
  dir: 'content/docs',
});

export default defineConfig({
  mdxOptions: {
    // MDX options
  },
});

import { defineCollections, frontmatterSchema } from 'fumadocs-mdx/config';
 
export const blogPosts = defineCollections({
  type: 'doc',
  dir: 'content/blog',
  // add required frontmatter properties
  schema: frontmatterSchema.extend({
      title: z.string(),
      slug: z.string(),
      status: z.enum(["published", "draft"]),
      author: z.object({
        name: z.string(),
        picture: z.string()
      }),
      publishedAt: z.string()
    })
});