import { source } from '../../../lib/source';
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { ImageZoom } from 'fumadocs-ui/components/image-zoom';
import Image from 'next/image';

export default async function Page(props: {
  params: Promise<{ lang: string; slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug, params.lang);
  if (!page) notFound();

  const MDX = page.data.body;
  console.log(page.data.author)
  return (
    <DocsPage 
      tableOfContent={{
        style: 'clerk'
      }}
      toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <figure className='flex items-center gap-2'>
        <Image 
          className=' object-cover rounded-full'
          width={30}
          height={30}
          src={page.data.author.picture}
          alt={page.data.author.name}
          />
          <p className='text-fd-muted-foreground'>
            {page.data.author.name}
          </p>
      </figure>
      <DocsBody>
        <MDX components={{ 
          ...defaultMdxComponents,  
          img: (props) => <ImageZoom {...(props)} />,  
        }} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: `${page.data.title}`,
    description: page.data.description,
  };
}
