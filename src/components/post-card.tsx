import {Post} from "@/service/blogs";
import Image from "next/image";
import {Card} from "@/components/ui/card";
import {Calendar, Clock} from "lucide-react";
import Link from "next/link";
import {formattedDate} from "@/lib/utils";

type Props = {
    post: Post
}

export const PostCard = ({post}: Props) => {
    return (
        <Link href={`/blogs/${post.slug}`} className="h-full">
            <Card className="w-full flex flex-row justify-center h-full items-center p-4 gap-4">
                <div className="flex flex-col flex-1 h-full">
                    <div className="flex-1">
                        <h4 className="text-xl font-extrabold">{post.title}</h4>
                        <p className="py-4 line-clamp-2 visible max-h-16">{post.brief}</p>
                    </div>
                    <div className="flex flex-row flex-wrap gap-2 opacity-70 mt-4 text-sm">
                        <div className="flex flex-row gap-1 items-center">
                            <Calendar size={16}/>
                            <span>{formattedDate(post.publishedAt)}</span>
                        </div>
                        <div className="flex flex-row gap-1 items-center">
                            <Clock size={16}/>
                            <span>{post.readTimeInMinutes} min read</span>
                        </div>
                    </div>
                </div>
                {post.coverImage?.url && (
                    <Image
                        src={post.coverImage.url}
                        width={96}
                        height={96}
                        alt={post.title}
                        className="aspect-square object-cover hidden xs:block"/>
                )}
            </Card>
        </Link>
    )
}