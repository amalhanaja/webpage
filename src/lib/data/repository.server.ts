import type { Activity, ArticleSummary, Profile, Project } from '$lib/model';
import imgProfile from '$lib/assets/images/profile.png';
import { formatToyyyyMMdd } from '$lib/helpers/formatter';
import { getCompletedKata } from '$lib/data/codewars';
import { getContributionCalendar } from './github';
import { getLastYear } from '$lib/helpers/date';
import { getWakatimeCodingActivity } from './wakatime';
import type Articles from '$lib/components/home/articles.svelte';
import { getLastHashnodeArticles } from './hashnode';
import { getAllProjects } from './projects';

export const getProfile = (): Profile => {
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
			},
			compose: {
				name: 'Compose'
			}
		}
	} satisfies Profile;
};

export const getActivites = async (): Promise<Map<string, Activity[]>> => {
	const lastYear = getLastYear();
	const codewars = await getCompletedKata(formatToyyyyMMdd(lastYear), 'amalhanaja');
	const github = await getContributionCalendar('amalhanaja');
	const wakatime = await getWakatimeCodingActivity();
	const allActivities = [...codewars, ...github, ...wakatime];
	return Map.groupBy(allActivities, (activity) => activity.dateInyyyyMMdd);
};

export const getLastArticle = async (): Promise<ArticleSummary[]> => {
	return await getLastHashnodeArticles('amalhanaja');
};

export const getFeaturedProject = (): Project[] => {
	return getAllProjects().slice(0, 2);
};
