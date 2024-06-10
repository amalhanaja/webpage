import type { Profile } from '$lib/model';
import imgProfile from '$lib/assets/images/profile.png';

export const get_profile = (): Profile => {
	return {
		name: 'Alfian Akmal Hanantio',
		headline: 'Senior Android Developer',
		shortBio:
			'Software Engineer with a passion for learning and pushing boundaries. Specialized in android development and always evolving.',
		profilePicture: imgProfile,
		skills: {
			kt: {
				name: 'Kotlin'
			},
			java: {
				name: 'Java'
			},
			go: {
				name: 'Go'
			},
			rs: {
				name: 'Rust'
			},
			ts: {
				name: 'TypeScript'
			},
			js: {
				name: 'JavaScript'
			},
			py: {
				name: 'Python'
			},
			sqlite3: {
				name: 'SQLite'
			},
			mysql: {
				name: 'MySQL'
			},
			postgresql: {
				name: 'PostgreSQL'
			},
			mongo: {
				name: 'MongoDB'
			},
			redis: {
				name: 'Redis'
			},
			android: {
				name: 'Android'
			},
			svelte: {
				name: 'Svelte'
			},
			graphql: {
				name: 'GraphQL'
			},
			nodejs: {
				name: 'NodeJS'
			},
			docker: {
				name: 'Docker'
			},
			jenkins: {
				name: 'Jenkins'
			},
			cicd: {
				name: 'CI/CD'
			},
			git: {
				name: 'Git'
			},
			microsevices: {
				name: 'Microservices'
			},
			firebase: {
				name: 'Firebase'
			},
			supabase: {
				name: 'Supabase'
			}
		},
		projects: [
			{
				name: 'PomoBoost',
				description: '',
				url: '',
				skill_tags: ['git']
			}
		]
	} satisfies Profile;
};
