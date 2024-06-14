import type { ArticleSummary } from '$lib/model';

type HashnodeResponse = {
	data: Data;
};

type Data = {
	user: User;
};

type User = {
	posts: Posts;
};

type Posts = {
	nodes: NodeResponse[];
};

type NodeResponse = {
	id: string;
	title: string;
	brief: string;
	url: string;
	coverImage: CoverImage;
	tags: Tag[];
};

type CoverImage = {
	url: string;
};

type Tag = {
	id: string;
	name: string;
};

export const getLastHashnodeArticles = async (username: string): Promise<ArticleSummary[]> => {
	const query = `
    query($username: String!, $pageSize: Int!, $page: Int!) {
        user(username: $username) {
          posts(pageSize: $pageSize, page: $page) {
            nodes {
              readTimeInMinutes
                id
                title
                brief
                url
                coverImage {
                  url
                }
                tags {
                  id
                  name
                }
            }
          }
        }
      }`;
	const variables = {
		username: username,
		pageSize: 6,
		page: 1
	};
	const reqBody = {
		query: query,
		variables: variables
	};
	const response = await fetch('https://gql.hashnode.com', {
		method: 'post',
		headers: {
			Authorization: 'e3ce3994-3072-43bd-adea-f5cbb420a557',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(reqBody)
	});
	const responseBody: HashnodeResponse = await response.json();
	return responseBody.data.user.posts.nodes.map(
		(node) =>
			({
				title: node.title,
				tags: node.tags.map((tag) => ({ id: tag.id, name: tag.name })),
				brief: node.brief,
				coverImageUrl: node.coverImage.url,
				link: node.url
			}) satisfies ArticleSummary
	);
};
