import {CoverImage} from "@/service/blogs";
import Image from "next/image";
import Link from "next/link";

type Props = {
    coverImage?: CoverImage
}

export const PostDetailCover = ({coverImage}: Props) => {
    if (!coverImage) {
        return (<></>)
    }
    console.log(coverImage)
    return (
        <div className="w-full h-[200px] sm:h-[328px] lg:h-[436px] relative mt-12 shadow-lg border-2">
            <Image
                src={coverImage.url}
                alt={coverImage.photographer ?? coverImage.url}
                layout="fill"
                objectFit="cover"
                title={coverImage.photographer}
            />
            {coverImage.attribution && (
                <div className="bg-card py-1 px-3 shadow border-2 absolute bottom-2 end-2 text-card-foreground">
                    Photo by <Link href={coverImage.attribution}
                                   title={coverImage.photographer}
                                   aria-label={coverImage.photographer}
                >{coverImage.photographer}</Link>
                </div>
            )}
        </div>
    )
}