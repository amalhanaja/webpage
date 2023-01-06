import { ArticleListItem } from "@components/Articles/ArticleListItem"

export interface ArticleListItemModel {
    title: string
    url: string
    slug: string
    readTimeInMinutes: number
}

interface ArticleResponse {
    title: string
    cover_image: string
    reading_time_minutes: number
    published_at: string
    url: string
}

export async function getArticleList(): Promise<ArticleListItemModel[]> {
    const apiKey = process.env.DEV_TO_API_KEY
    if (!apiKey) {
        throw Error("API KEY IS REQUIRED")
    }
    const response = await fetch("https://dev.to/api/articles/me/published", {
        headers: {
            "api-key": apiKey
        }
    })
    const jsonResponse: ArticleResponse[] = await response.json()
    return jsonResponse.map((article) => {
        return {
            title: article.title,
            url: article.url,
            slug: "",
            readTimeInMinutes: article.reading_time_minutes
        }
    })
}