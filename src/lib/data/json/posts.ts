import type { PostModel } from '$lib/models/PostModel';

type PostResponse = {
	title: string;
	brief: string;
	slug: string;
	readTime: number;
	coverImage: string;
	dateAdded: string;
};

const gql = async (query: string, variables: Record<string, unknown> = {}) => {
	const response = await fetch('https://api.hashnode.com', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ query: query, variables: variables })
	});
	return await response.json();
};

export const getPublicationUrl = async (): Promise<string> => {
	const gqlQuery = `
        query {
            user(username:"amalhanaja") {
                publicationDomain
            }
        }
    `;
	const json = await gql(gqlQuery);
	const publicationDomain = json.data.user.publicationDomain;
    return `https://${publicationDomain}`
};

export const fetchPosts = async (page: number = 0): Promise<PostModel[]> => {
	const gqlQuery = `
        query GetUserArticles($page: Int!) {
            user(username: "amalhanaja") {
                publication {
                    posts(page: $page) {
                        title
                        brief
                        slug
                        readTime
                        coverImage
                        dateAdded
                    }
                }
            }
        }
    `;

	const json = await gql(gqlQuery, { page });
	const publicationUrl = await getPublicationUrl();
	const posts = <PostResponse[]>json.data.user.publication.posts;
	return posts.map(
		(p) =>
			({
				title: p.title,
				brief: p.brief,
				thumbnailUrl: p.coverImage,
				publishedAt: new Date(p.dateAdded),
				readTime: p.readTime,
				link: `${publicationUrl}/${p.slug}`
			}) satisfies PostModel
	);
};
