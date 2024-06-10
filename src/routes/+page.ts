import { get_profile } from '$lib/data/repository';
import type { PageLoad } from './$types';

export const prerender = true;

export const load = () => {
	return get_profile();
};
