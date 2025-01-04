import {getPostBySlug} from "@/service/blogs";
import {CodeHighlighting} from "@/components/code-highlighting";
import 'highlight.js/styles/atom-one-dark.min.css';
import './page.css';
import {ButtonBack} from "@/components/ui/button-back";
import {Card} from "@/components/ui/card";
import {BookOpen, Calendar} from "lucide-react";
import {formattedDate} from "@/lib/utils";
import Image from "next/image";
import {PostDetailCover} from "@/components/post-detail-cover";

export default async function BlogPosts(
    {params}: { params: Promise<{ slug: string }> }
) {
    const slug = (await params).slug
    const post = await getPostBySlug(slug)
    return (
        <>
            <CodeHighlighting/>
            <section className="w-full max-w-screen-xl mx-auto px-4 py-24 section-blog-post">
                <ButtonBack/>
                <PostDetailCover coverImage={post.coverImage} />
                <div className="mt-6 flex flex-col">
                    <h1>{post.title}</h1>
                    <h2 className="opacity-70" style={{fontWeight: 600}}>{post.subtitle}</h2>
                </div>
                <Card className="text-lg font-semibold flex flex-row gap-2 p-4 shadow-sm mb-6 mt-4">
                    <div className="flex flex-row gap-1 items-center">
                        <Calendar size={18}/>
                        <span>{formattedDate(post.publishedAt)}</span>
                    </div>
                    <div className="flex flex-row gap-1 items-center">
                        <BookOpen size={18}/>
                        <span>{post.readTimeInMinutes} min read</span>
                    </div>
                </Card>
                <div className="mt-12" dangerouslySetInnerHTML={{__html: post.content}}></div>
            </section>
        </>
    )
}