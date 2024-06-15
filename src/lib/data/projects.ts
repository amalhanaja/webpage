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
				'In response to the challenges of the COVID-19 pandemic, DyahAcademy emerged as a innovative Android application designed to function as a comprehensive e-learning platform. Developed specifically to support the educational needs of students attending SMPN 49 Surabaya, DyahAcademy provides a virtual space for continued learning and academic engagement, ensuring that students can thrive even amidst disruptions to traditional classroom settings.',
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
