import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const HOSTNAME = process.env.NEXT_PUBLIC_HOSTNAME || 'localhost'
    return [
        {
            url: `https://${HOSTNAME}`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: `https://${HOSTNAME}/blogs`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.8,
        },
        {
            url: `https://${HOSTNAME}/experiences`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `https://${HOSTNAME}/projects`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
    ]
}