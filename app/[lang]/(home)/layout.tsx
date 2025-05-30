import type { ReactNode } from 'react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '../../layout.config';
import Footer from '@/components/ui/footer';
import '../../global.css';

export default function Layout({ children }: { children: ReactNode }) {
  return <HomeLayout {...baseOptions}>
    <main className="min-h-svh">
    {children}
    </main>
    <Footer />
  </HomeLayout>;
}
