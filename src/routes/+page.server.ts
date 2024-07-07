import {
	getActivites,
	getContacts,
	getFeaturedProject,
	getLastArticle,
	getProfile
} from '$lib/data/repository.server';
import type { Profile } from '$lib/model';
import type { Config } from '@sveltejs/adapter-vercel';

export const prerender = true;

export const config = {
	runtime: "nodejs20.x"
} satisfies Config

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
