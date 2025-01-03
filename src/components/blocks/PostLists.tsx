"use client"

import {Post, PostList} from "@/service/blogs";
import {useState} from "react";
import {SectionTitle} from "@/components/blocks/section-title";
import {Briefcase, Loader2} from "lucide-react";
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
                <Briefcase/>
                <h2>Projects</h2>
            </SectionTitle>
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