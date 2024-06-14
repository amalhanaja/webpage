import type { Activity, ArticleSummary, Profile } from '$lib/model';
import imgProfile from '$lib/assets/images/profile.png';
import { formatToyyyyMMdd } from '$lib/helpers/formatter';
import { getCompletedKata } from '$lib/data/codewars';
import { getContributionCalendar } from './github';
import { getLastYear } from '$lib/helpers/date';
import { getWakatimeCodingActivity } from './wakatime';
import type Articles from '$lib/components/home/articles.svelte';
import { getLastHashnodeArticles } from './hashnode';

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
		},
		projects: [
			{
				name: 'PomoBoost',
				description:
					'PomoBoost is your productivity sidekick! This streamlined Pomodoro timer helps you conquer your tasks in focused 25-minute intervals, punctuated by refreshing breaks.',
				link: 'https://pomoboost.vercel.app/',
				skills: ['git', 'svelte', 'ts']
			},
			{
				name: 'DyahAcademy',
				description:
					'DyahAcademy is an Android application designed as an e-learning platform to support students at SMPN 49 Surabaya during COVID-19.',
				link: 'https://play.google.com/store/apps/details?id=com.amalcodes.dyahacademy.android',
				skills: ['android', 'kt', 'ts', 'nodejs', 'graphql', 'postgresql']
			},
			{
				name: 'WiseScreen',
				description:
					'This project was built for the "Anak Indonesia Bijak Beraktivitas di Depan Layar" challenge by Dicoding Indonesia. I developed this project from the design process using Figma until it was selected as a Winning App. The main purpose of this project is to manage screen time while using mobile devices.',
				skills: ['android', 'kt', 'compose'],
				repoUrl: 'https://github.com/amalhanaja/WiseScreen'
			}
		]
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
