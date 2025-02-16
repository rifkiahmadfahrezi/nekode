import { docs } from '@/.source';
import { loader } from 'fumadocs-core/source';
import * as RemixIcons from "@remixicon/react";
import { i18n } from "@/lib/i18n"
import { createElement } from 'react';

export const source = loader({
  i18n,
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
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
