"use client"

import {Post, PostList} from "@/service/blogs";
import {useState} from "react";
import {SectionTitle} from "@/components/blocks/section-title";
import {BookText, Loader2} from "lucide-react";
import {PostCard} from "@/components/post-card";
import {Button} from "@/components/ui/button";
import {loadMorePosts} from "@/actions/load-more-posts";

type Props = {
    initial: PostList
}

export const PostLists = ({initial}: Props) => {
    const [state, setState] = useState(initial)
    const [isLoadMore, setIsLoadMore] = useState<boolean>(false)
    const onLoadMore = async () => {
        setIsLoadMore(true)
        const results = await loadMorePosts(state)
        setState(results)
        setIsLoadMore(false)
    }
    return (
        <div className="flex flex-col">
            <SectionTitle className="uppercase bg-card">
                <BookText/>
                <h1>Posts</h1>
            </SectionTitle>
            <h2 className="text-4xl tracking-wider font-bold mt-6">
                Check out my blog where I share my learnings and perspectives on the tech world.
            </h2>
            <div className="grid grid-cols-1 gap-6 mt-16 lg:grid-cols-2">
                {state.posts.map((post: Post) => (
                    <PostCard key={post.id} post={post}/>
                ))}
            </div>
            {state.hasNextPage && (
                <Button className="w-fit mt-12 self-center" disabled={isLoadMore} size="lg" type="submit"
                        onClick={onLoadMore}>
                    {isLoadMore ? (<Loader2 className="animate-spin repeat-infinite"/>) : <>Load More</>}
                </Button>)}
        </div>
    )
}