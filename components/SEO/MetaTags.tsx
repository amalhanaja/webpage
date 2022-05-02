import { FC } from "react";

interface MetaTagsProps {
    title: string
    description: string
    url: string
    imageUrl?: string
}

export const MetaTags: FC<MetaTagsProps> = ({ title, description, url, imageUrl }) => {
    return (
        <>
            {/* Primary Tags */}
            <link rel="canonical" href={url} />
            <meta name="title" content={title} />
            <meta name="description" content={description} />

            {/* Open Graph - Facebook - Google */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={imageUrl ?? '/android-chrome-192x192.png'} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={title} />
            <meta name="twitter:site" content="@amalhanaja" />
            <meta name="twitter:creator" content="@amalhanaja" />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={imageUrl ?? '/android-chrome-192x192.png'} />
        </>
    )
}