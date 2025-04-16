import '../global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';

import ProgressbarProvider from '@/components/providers/progressbar-provider';

import { siteConfig } from '../../config/site';
import { I18nProvider, type Translations } from "fumadocs-ui/i18n";

const cn: Partial<Translations> = {
  search: 'Translated Content',
  // other translations
};

const locales = [
  {
    name: 'English',
    locale: 'en',
  },
  {
    name: 'Indonesian',
    locale: 'id',
  },
]

const inter = Inter({
  subsets: ['latin'],
});

export const metadata : Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  },
  openGraph: {
    type: "website",
    url: "/",
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{ url: "/og.jpg" }]
  }
}

export default async function Layout({ params, children }: { params: Promise<{ lang: string }>, children: ReactNode }) {
  const lang = (await params).lang;
  return (
    <html 
    lang={lang} 
    className={inter.className} 
    suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <ProgressbarProvider>
          <I18nProvider 
            translations={{ cn }[lang]}
            locale={lang} 
            locales={locales}>
            <RootProvider
                search={{
                  options: {
                    type: 'static',
                  },
                }}
              >
                {children}
              </RootProvider>
          </I18nProvider>
        </ProgressbarProvider>

        <Script 
          src="https://giscus.app/client.js"
          data-repo="rifkiahmadfahrezi/nekode"
          data-repo-id="R_kgDON58IIA"
          data-category="Announcements"
          data-category-id="DIC_kwDON58IIM4CpItb"
          data-mapping="pathname"
          data-strict="0"
          data-reactions-enabled="1"
          data-emit-metadata="0"
          data-input-position="bottom"
          data-theme="preferred_color_scheme"
          data-lang="en"
          crossOrigin="anonymous"
          async/>
      </body>
    </html>
  );
}
