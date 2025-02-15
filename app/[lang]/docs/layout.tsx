import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '../../layout.config';
import { source } from '../../../lib/source';

export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: React.ReactNode;
}) {
  const lang = (await params).lang
  return (
    <DocsLayout tree={source.pageTree[lang]} {...baseOptions}>
      {children}
    </DocsLayout>
  );
}
