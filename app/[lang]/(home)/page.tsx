import { Hero, Comment } from "@/components/page/home"

export default function Home() {
    return (
    <section className="py-16 md:py-20">
        <div className="mx-auto max-w-screen-lg space-y-8 px-6 md:space-y-12">
            <Hero />
            <Comment />
        </div>
    </section>
    )
}