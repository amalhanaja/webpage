"use server"

const baseUrl = "https://gql.hashnode.com/"

type HashnodeResponse = {
    data: Data
}

type Data = {
    publication: Publication
}

type Publication = {
    posts: Posts
}

type Posts = {
    edges: Edge[]
    pageInfo: PageInfo
}

type Edge = {
    node: Node
}

type Node = {
    id: string
    title: string
    brief: string
    url: string
    slug: string
    coverImage?: CoverImage
    tags: Tag[]
    readTimeInMinutes: number
    publishedAt: string
}

type CoverImage = {
    url: string
}

type Tag = {
    name: string
}

type PageInfo = {
    hasNextPage: boolean
    endCursor: string
}


export type Post = {
    id: string
    title: string
    brief: string
    slug: string
    coverImage: string
    tags: string[]
    readTimeInMinutes: number
    publishedAt: string
}

export type PostList = { endCursor: string; posts: Post[], hasNextPage: boolean };

export const getPostList = async ({pageSize, after}: { pageSize: number, after: string }): Promise<PostList> => {
    const query = `
    query ($host: String, $pageSize: Int!, $after: String) {
      publication(host: $host) {
        posts(first: $pageSize, after: $after) {
          edges {
            node {
              id
              title
              brief
              url
              slug
              coverImage {
                url
              }
              tags {
                name
              }
              readTimeInMinutes
              publishedAt
            }
          }
          pageInfo {
            hasNextPage
            endCursor
          }
        }
      }
    }
    `
    const responseBody = await fetchGql<HashnodeResponse>(query, {
        host: "amalhanaja.hashnode.dev",
        after,
        pageSize,
    })
    const posts = responseBody.data.publication.posts.edges.map(({node}) => (
        {
            ...node,
            tags: node.tags.map((v) => v.name),
            coverImage: node.coverImage?.url ?? "",
        } satisfies Post
    ))
    return {
        posts,
        ...responseBody.data.publication.posts.pageInfo,
    }
}

const fetchGql = async <T>(query: string, variables: unknown): Promise<T> => {
    const requestBody = {
        query,
        variables,
    }
    const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody)
    })
    return await response.json() as T
}