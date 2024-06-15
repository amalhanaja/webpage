import type { Activity, ArticleSummary, Contact, Profile, Project } from '$lib/model';
import imgProfile from '$lib/assets/images/profile.png';
import icGithub from '$lib/assets/images/icons/github.svg';
import icCodewars from '$lib/assets/images/icons/codewars.svg';
import icHashnode from '$lib/assets/images/icons/hashnode.svg';
import icInstagram from '$lib/assets/images/icons/instagram.svg';
import icLinkedIn from '$lib/assets/images/icons/linkedin.svg';
import icTiktok from '$lib/assets/images/icons/tiktok.svg';
import icXTwitter from '$lib/assets/images/icons/x-twitter.svg';
import icYoutube from '$lib/assets/images/icons/youtube.svg';
import { formatToyyyyMMdd } from '$lib/helpers/formatter';
import { getCompletedKata } from '$lib/data/codewars';
import { getContributionCalendar } from './github';
import { getLastYear } from '$lib/helpers/date';
import { getWakatimeCodingActivity } from './wakatime';
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

export const getContacts = (): Contact[] => {
	return [
		{
			label: 'Github',
			url: 'https://github.com/amalhanaja',
			icon: icGithub,
			username: '@amalhanaja'
		},
		{
			label: 'LinkedIn',
			url: 'https://linkedin.com/in/amalhanaja',
			username: 'in/amalhanaja',
			icon: icLinkedIn
		},
		{
			label: 'Hashnode',
			url: 'https://hashnode.com/@amalhanaja',
			icon: icHashnode,
			username: '@amalhanaja'
		},
		{
			label: 'Youtube',
			url: 'https://youtube.com/@amalhanaja',
			icon: icYoutube,
			username: '@amalhanaja'
		},
		{
			label: 'TikTok',
			url: 'https://www.tiktok.com/@amalhanaja',
			icon: icTiktok,
			username: '@amalhanaja'
		},
		{
			label: 'Codewars',
			url: 'https://www.codewars.com/users/amalhanaja',
			username: '@amalhanaja',
			icon: icCodewars
		},
		{
			label: 'Instagram',
			url: 'https://instagram.com/amalhanaja',
			username: '@amalhanaja',
			icon: icInstagram
		},
		{
			label: 'X',
			url: 'https://x.com/amalhanaja',
			username: '@amalhanaja',
			icon: icXTwitter
		}
	];
};
