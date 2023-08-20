import socialsMedia from '$lib/data/json/social-media.json';
import type { SocialMediaInfo } from '$lib/models/SocialMediaModel';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		socials: <SocialMediaInfo[]>socialsMedia
	};
};
