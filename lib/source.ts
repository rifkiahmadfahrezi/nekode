import { docs } from '@/.source';
import { loader } from 'fumadocs-core/source';
import * as RemixIcons from "@remixicon/react";
import { createElement } from 'react';
import { createMDXSource } from 'fumadocs-mdx';
import { blogPosts } from '@/.source';

export const source = loader({
  baseUrl: '/docs',
  source: createMDXSource(
    docs.docs.filter(doc => doc.status === 'published')
  ),
  icon(icon) {
    if (!icon) {
      // You may set a default icon
      return;
    }

    // Check if the requested icon exists in RemixIcons
    if (icon in RemixIcons) {
      return createElement(RemixIcons[icon as keyof typeof RemixIcons]);
    }
  },
});


export const blog = loader({
  baseUrl: '/blog',
  source: createMDXSource(
    blogPosts.filter(doc => doc.status === 'published')
  ),
});