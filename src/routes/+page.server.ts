import socialsMedia from '$lib/data/json/social-media.json';
import featuredProjects from '$lib/data/json/featured-projects.json';
import type { FeaturedProjectModel } from '$lib/models/ProjectModel';
import type { SocialMediaInfo } from '$lib/models/SocialMediaModel';
import type { PageServerLoad } from './$types';
import { fetchPosts, getPublicationUrl } from '$lib/data/json/posts';

export const load: PageServerLoad = async () => {
	const posts = await fetchPosts();
	const publicationUrl = await getPublicationUrl();
	const vercelUrl: string = process.env.VERCEL_URL ?? '';
	const siteUrl = `https://${vercelUrl}`;
	return {
		socials: <SocialMediaInfo[]>socialsMedia,
		projects: <FeaturedProjectModel[]>featuredProjects,
		posts,
		allPostUrl: publicationUrl,
		siteUrl: siteUrl,
		url: siteUrl + '/'
	};
};
