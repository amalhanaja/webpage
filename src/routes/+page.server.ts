import {
	getActivites,
	getContacts,
	getFeaturedProject,
	getLastArticle,
	getProfile
} from '$lib/data/repository.server';
import type { Profile } from '$lib/model';

export const prerender = false;

export const load = async () => {
	const profile: Profile = getProfile();
	const activities = await getActivites();
	const lastArticles = await getLastArticle();
	const featuredProjects = getFeaturedProject();
	const contacts = getContacts();
	return {
		profile,
		activities,
		lastArticles,
		featuredProjects,
		contacts
	};
};
