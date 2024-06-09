import type { PageLoad } from './$types';

export const prerender = true;

type LoadResult = {
	techStack: [string];
};

export function load() {
	return {
		techStacks: [
			'Android',
			'Kotlin',
			'Java',
			'Compose',
			'Kotlin Multiplatform',
			'NodeJS',
			'MongoDB',
			'PostgreSQL',
			'Rust',
			'Go',
			'Javascript',
			'Typescript',
			'Redis',
			'Svelte',
			'Python',
			'Docker',
			'Jenkins',
			'CI/CD',
			'Strapi',
			'Firebase',
			'Supabase',
			'GraphQL',
			'Git',
			'Gradle'
		].map((v) => v.toUpperCase())
	};
}
