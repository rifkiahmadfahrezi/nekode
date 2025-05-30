import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';

import ProgressbarProvider from '@/components/providers/progressbar-provider';

import { siteConfig } from '../config/site';

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

export default async function Layout({ children }: { children: ReactNode }) {

  return (
    <html 
    lang={"en"} 
    className={inter.className} 
    suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <ProgressbarProvider>
          <RootProvider
              search={{
                options: {
                  type: 'static',
                },
              }}
            >
              {children}
            </RootProvider>
        </ProgressbarProvider>
      </body>
    </html>
  );
}
