import type {MetadataRoute} from 'next'

export default function robots(): MetadataRoute.Robots {
    const HOSTNAME = process.env.NEXT_PUBLIC_HOSTNAME || 'localhost'
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: `https://${HOSTNAME}/sitemap.xml`,
    }
}