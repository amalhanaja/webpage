import {getPostList} from "@/service/blogs";
import {PostLists} from "@/components/blocks/PostLists";
import {HeroHighlight} from "@/components/ui/hero-highlight";

export const dynamic = 'force-dynamic';

export default async function BlogsPage() {
    const initialPosts = await getPostList({pageSize: 6, after: ""})
    return (
        <HeroHighlight className="w-full max-w-screen-xl py-32 mx-auto px-4">
            <PostLists initial={initialPosts}/>
        </HeroHighlight>
    )
}