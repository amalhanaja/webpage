"use server"

const baseUrl = "https://gql.hashnode.com/"

type HashnodeResponse = {
    data: Data
}

type Data = {
    publication: Publication
}

type Publication = {
    posts?: Posts
    post?: Node
}

type Posts = {
    edges: Edge[]
    pageInfo: PageInfo
}

type Edge = {
    node: Node
}

type PostContent = {
    markdown: string
    html: string
}

type Node = {
    id: string
    title: string
    subtitle: string
    brief: string
    url: string
    slug: string
    coverImage?: CoverImage
    content?: PostContent
    tags: Tag[]
    readTimeInMinutes: number
    publishedAt: string
}

export type CoverImage = {
    url: string
    attribution: string
    photographer: string
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
    subtitle: string
    brief: string
    slug: string
    coverImage?: CoverImage
    content: string
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
              subtitle
              brief
              url
              slug
              coverImage {
                url
                attribution
                photographer
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
    const posts = responseBody.data.publication.posts!.edges.map(({node}) => (
        {
            ...node,
            tags: node.tags.map((v) => v.name),
            coverImage: node.coverImage,
            content: ""
        } satisfies Post
    ))
    return {
        posts,
        ...responseBody.data.publication.posts!.pageInfo,
    }
}

export const getPostBySlug = async (slug: string): Promise<Post> => {
    const query = `
    query ($host: String, $slug: String!) {
      publication(host: $host) {
        post(slug: $slug) {
          id
          title
          brief
          url
          subtitle
          slug
          content {
            markdown
            html
          }
          coverImage {
            url
            attribution
            photographer
          }
          tags {
            name
          }
          readTimeInMinutes
          publishedAt
        }
      }
    }`
    const variables = {
        host: "amalhanaja.hashnode.dev",
        slug,
    }
    const responseBody = await fetchGql<HashnodeResponse>(query, variables)
    const post = responseBody.data.publication.post!
    return {...post, content: post.content?.html ?? "", tags: post.tags?.map((v) => v.name)}
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