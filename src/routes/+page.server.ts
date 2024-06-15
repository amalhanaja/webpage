import {
	getActivites,
	getFeaturedProject,
	getLastArticle,
	getProfile
} from '$lib/data/repository.server';
import type { Profile } from '$lib/model';

export const prerender = true;

export const load = async () => {
	const profile: Profile = getProfile();
	const activities = await getActivites();
	const lastArticles = await getLastArticle();
	const featuredProjects = getFeaturedProject();
	return {
		profile,
		activities,
		lastArticles,
		featuredProjects
	};
};
