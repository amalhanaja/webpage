import {getPostList} from "@/service/blogs";
import {Posts} from "@/components/blocks/post-list";
import {HeroHighlight} from "@/components/ui/hero-highlight";
import {Metadata} from "next";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: "Blog - Alfian Akmal Hanantio",
    description: "Check out my blog where I share my learnings and perspectives on the tech world, including web, mobile, AI and emerging technologies. I explore trends, share best practices, and offer insights into the ever-changing tech landscape.",
    openGraph: {
        title: "Blog - Alfian Akmal Hanantio",
        description: "Check out my blog where I share my learnings and perspectives on the tech world, including web, mobile, AI and emerging technologies. I explore trends, share best practices, and offer insights into the ever-changing tech landscape."
    }
}

export default async function BlogsPage() {
    const initialPosts = await getPostList({pageSize: 6, after: ""})
    return (
        <HeroHighlight className="w-full max-w-screen-xl py-32 mx-auto px-4">
            <Posts initial={initialPosts}/>
        </HeroHighlight>
    )
}