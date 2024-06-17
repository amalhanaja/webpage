import type { Project } from '$lib/model';
import dyahacademy from '$lib/assets/images/portfolio/dyahacademy.png';
import wisescreen from '$lib/assets/images/portfolio/wisescreen.png';

export const getAllProjects = (): Project[] => {
	return [
		{
			name: 'WiseScreen',
			description:
				'This project was built for the "Anak Indonesia Bijak Beraktivitas di Depan Layar" challenge by Dicoding Indonesia. I developed this project from the design process using Figma until it was selected as a Winning App. The main purpose of this project is to manage screen time while using mobile devices.',
			skills: ['android', 'kt', 'compose'],
			repoUrl: 'https://github.com/amalhanaja/WiseScreen',
			imageUrl: wisescreen
		},
		{
			name: 'DyahAcademy',
			description:
				'DyahAcademy is an Android application designed as an e-learning platform to support students at SMPN 49 Surabaya during COVID-19.',
			link: 'https://play.google.com/store/apps/details?id=com.amalcodes.dyahacademy.android',
			skills: ['android', 'kt', 'ts', 'nodejs', 'graphql', 'postgresql'],
			imageUrl: dyahacademy
		},
		{
			name: 'PomoBoost',
			description:
				'PomoBoost is your productivity sidekick! This streamlined Pomodoro timer helps you conquer your tasks in focused 25-minute intervals, punctuated by refreshing breaks.',
			link: 'https://pomoboost.vercel.app/',
			skills: ['git', 'svelte', 'ts'],
			imageUrl: ''
		}
	];
};
