import { getActivites, getActivityDuration, getProfile } from '$lib/data/repository.server';
import type { Profile } from '$lib/model';

export const prerender = true;

export const load = async () => {
	const profile: Profile = getProfile();
	const activities = await getActivites();
	const activityDuration = await getActivityDuration();
	return {
		profile,
		activities,
		activityDuration
	};
};
