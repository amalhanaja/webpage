import {CoverImage} from "@/service/blogs";
import Image from "next/image";

type Props = {
    coverImage?: CoverImage
}

export const PostDetailCover = ({coverImage}: Props) => {
    if (!coverImage) {
        return (<></>)
    }
    return (
        <div className="w-full h-[484px] relative mt-12 shadow-sm border-2">
            <Image src={coverImage.url} alt={coverImage.photographer} layout="fill" objectFit="cover"/>
        </div>
    )
}