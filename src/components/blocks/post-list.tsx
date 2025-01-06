"use client"

import {Post, PostList} from "@/service/blogs";
import {useState} from "react";
import {SectionTitle} from "@/components/blocks/section-title";
import {BookText, Loader2} from "lucide-react";
import {PostCard} from "@/components/post-card";
import {Button} from "@/components/ui/button";
import {loadMorePosts} from "@/actions/load-more-posts";
import {motion} from "motion/react";

type Props = {
    initial: PostList
}

export const Posts = ({initial}: Props) => {
    const [state, setState] = useState(initial)
    const [isLoadMore, setIsLoadMore] = useState<boolean>(false)
    const onLoadMore = async () => {
        setIsLoadMore(true)
        const results = await loadMorePosts(state)
        setState(results)
        setIsLoadMore(false)
    }
    const sectionTitleVariants = {
        initial: {opacity: 0, transform: 'translateX(-60px)'},
        show: {opacity: 1, transform: 'translateX(0)'},
    }
    const sectionSubtitleVariants = {
        initial: {opacity: 0, transform: 'translateX(-60px)'},
        show: {opacity: 1, transform: 'translateX(0)', transition: {delay: 0.1}},
    }
    const postListVariants = {
        initial: {opacity: 0, transform: 'translateY(60px)'},
        show: {
            opacity: 1,
            transform: 'translateY(0)',
            transition: {delay: 0.2, ease: 'easeIn', staggerChildren: 0.2, delayChildren: 0.2},
        },
    }
    return (
        <div className="flex flex-col">
            <SectionTitle
                variants={sectionTitleVariants}
                initial="initial"
                animate="show"
                className="uppercase bg-card"
            >
                <BookText/>
                <h1>Blogs</h1>
            </SectionTitle>
            <motion.h2
                variants={sectionSubtitleVariants}
                initial="initial"
                animate="show"
                className="text-4xl tracking-wider font-bold mt-6"
            >
                Check out my blog where I share my learnings and perspectives on the tech world.
            </motion.h2>
            <motion.div className="grid grid-cols-1 gap-6 mt-16 lg:grid-cols-2" variants={postListVariants}
                        initial="initial" animate="show">
                {state.posts.map((post: Post) => (
                    <PostCard key={post.id} post={post}/>
                ))}
            </motion.div>
            <motion.div
                className="flex justify-center"
                variants={{
                    ...sectionSubtitleVariants,
                    show: {...sectionTitleVariants.show, transition: {delay: 1}}
                }}
                initial="initial"
                animate="show">
                {state.hasNextPage && (
                    <Button
                        className="w-fit mt-12 self-center"
                        disabled={isLoadMore}
                        size="lg"
                        type="submit"
                        onClick={onLoadMore}
                    >
                        {isLoadMore ? (<Loader2 className="animate-spin repeat-infinite"/>) : <>Load More</>}
                    </Button>)}
            </motion.div>
        </div>
    )
}