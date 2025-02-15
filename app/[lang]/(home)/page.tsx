import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <section className="">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="text-7xl mb-4 font-light tracking-tighter">
            Learn by <span className="font-medium">coding</span>,
            Grow by <span className="font-medium">sharing.</span>
          </h1>
          <p className="mb-8 leading-relaxed">I’m a junior web developer sharing what I’ve learned so we can grow together. Start your web development journey today—with free courses made for aspiring developers like you.</p>
          <div className="flex justify-center gap-2">
            <Button
              size={'xl'}
              asChild
              >
            <Link href={'/docs'}>
              Browse courses
            </Link>    
            </Button>
            <Button
              size={'xl'}
              variant={'ghost'}
              asChild
              >
            <Link href={'/about'}>
              About
            </Link>    
            </Button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image className="object-cover object-center rounded" 
            width={720}
            height={600}
            alt="hero" src="https://dummyimage.com/720x600"/>
        </div>
      </div>
    </section>
  );
}
