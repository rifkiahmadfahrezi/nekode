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
    author: z.string(),
    date: z.string().date().or(z.date()),
  }),
});