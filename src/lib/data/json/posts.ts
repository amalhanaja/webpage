import type { PostModel } from '$lib/models/PostModel';

type PostResponse = {
	title: string;
	brief: string;
	slug: string;
	readTime: number;
	coverImage: string;
	dateAdded: string;
};

export const fetchPosts = async (page: number = 0): Promise<PostModel[]> => {
	const gqlQuery = `
        query GetUserArticles($page: Int!) {
            user(username: "amalhanaja") {
                publicationDomain
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
	const response = await fetch('https://api.hashnode.com', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ query: gqlQuery, variables: { page } })
	});

	const json = await response.json();
	const publicationDomain = json.data.user.publicationDomain;
	const posts = <PostResponse[]>json.data.user.publication.posts;
	return posts.map(
		(p) =>
			({
				title: p.title,
				brief: p.brief,
				thumbnailUrl: p.coverImage,
				publishedAt: new Date(p.dateAdded),
				readTime: p.readTime,
				link: `https://${publicationDomain}/${p.slug}`
			}) satisfies PostModel
	);
};
