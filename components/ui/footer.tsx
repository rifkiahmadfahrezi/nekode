import React from 'react'
import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { Button } from './button'
import { socials } from '@/config/socials'

const Footer = () => {
  return (
   <footer className="body-font">
   <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <Link href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-fd-foreground">
         <span className="ml-3 text-xl">{siteConfig.name}</span>
      </Link>
      <p className="text-sm text-fd-foreground sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© {new Date().getFullYear()} {siteConfig.name} —
         <a 
            href="https://github.com/rifkiahmadfahrezi"
             className="text-fd-foreground/75 hover:text-fd-foreground ml-1" 
             rel="noopener noreferrer" 
             target="_blank">@rifkiaf</a>
      </p>
      <ul className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-1">
         {socials.nekode.map(socials => (
            <li key={socials.link}>
               <Button 
                  variant={'outline'}
                  asChild
                  size={'icon'}
                  >
                  <a 
                     rel="noopener noreferrer"
                     target='_blank'
                     href={socials.link}>
                     {<socials.icon/>}
                  </a>
               </Button>
            </li>
         ))}
      </ul>
   </div>
   </footer>
  )
}

export default Footer
