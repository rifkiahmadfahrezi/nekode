import React from 'react'
import { aboutContent } from '@/messages/about/content'
import { socials } from '@/config/socials'
import { Card } from 'fumadocs-ui/components/card'

const AboutPage = async ({
   params
}: {
   params: Promise<{ lang: string }>
}) => {

   const { lang } = await params

  return (
   <div className="container mx-auto max-w-screen-lg">
      <article className='my-10 mx-auto 2xl:prose-xl prose dark:prose-invert' dangerouslySetInnerHTML={{ __html: aboutContent.find(d => d.lang === lang)?.content || 'Content not found' }} />

      <div className="">
         <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {socials.personal.map(social => (
               <Card 
                  external
                  icon={<social.icon/>}
                  href={social.link}
                  title={social.label}
                  key={social.link}>
               </Card>
            ))}
         </div>
      </div>
   </div>
  )
}

export default AboutPage