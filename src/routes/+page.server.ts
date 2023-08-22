import socialsMedia from '$lib/data/json/social-media.json';
import featuredProjects from '$lib/data/json/featured-projects.json';
import type { FeaturedProjectModel } from '$lib/models/ProjectModel';
import type { SocialMediaInfo } from '$lib/models/SocialMediaModel';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		socials: <SocialMediaInfo[]>socialsMedia,
		projects: <FeaturedProjectModel[]>featuredProjects
	};
};
