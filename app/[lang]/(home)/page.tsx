import { Hero, Comment } from "@/components/page/home"

import Script from 'next/script';

export default function Home() {
    return (
        <>
    <section className="py-16 md:py-20">
        <div className="mx-auto max-w-screen-lg space-y-8 px-6 md:space-y-12">
            <Hero />
            <Comment />
        </div>
        
    </section>
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
        </>
    )
}