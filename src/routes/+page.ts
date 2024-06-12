import { getActivites, getProfile } from '$lib/data/repository';
import type { Profile } from '$lib/model';

export const prerender = true;

export const load = async () => {
	const profile: Profile = getProfile();
	const activities = await getActivites();
	return {
		profile,
		activities
	};
};
