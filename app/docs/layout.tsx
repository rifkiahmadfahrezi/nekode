import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '../layout.config';
import { source } from '../../lib/source';
import '../global.css';


export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DocsLayout tree={source.pageTree} {...baseOptions}>
      {children}
    </DocsLayout>
  );
}
