import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { GitHub, Instagram } from '@/components/icons'

const links = [
   {
      label: "Instagram",
      url: "https://www.instagram.com/nekode.dev_/",
      icon: Instagram
   },
   {
      label: "Github",
      url: "https://github.com/dev-nekode",
      icon: GitHub
   },
]

export function Hero() {
    return (
      <>
         <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <h2 className="text-4xl md:text-5xl font-medium">Learn by coding, grow by sharing.</h2>
            <div className="space-y-6">
               <p>Nekode is self-initiated platform to share structured learning notes and summaries in the form of courses aimed at helping others learn web development efficiently.</p>

               <div className="flex items-center gap-2 flex-wrap">
                  <Button asChild variant={"default"}  size="sm">
                        <Link href="/docs">
                           <span>Learn now</span>
                           <ChevronRight className="size-3" />
                        </Link>
                  </Button>

                  {links.map(({
                     url, label,
                     icon : Icon
                  }) => (
                     <Button key={url} asChild variant={"ghost"}  size="icon">
                           <a target='_blank' href={url}>
                              <Icon />
                              <span className='sr-only'>{label}</span>
                           </a>
                     </Button>
                  ))}
               </div>
            </div>
         </div>
         <figure className="rounded-md overflow-hidden">
            <Image className="grayscale size-full object-contain" src="https://images.unsplash.com/photo-1535696588143-945e1379f1b0" alt="cat illustration image" loading="lazy" width={900} height={700} />
         </figure>
      </>
    )
}