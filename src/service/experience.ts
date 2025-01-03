'use server';

import {ReactElement} from 'react';
import {getContents} from '@/lib/mdx';

export type Link = {
	label: string;
	href: string;
}

export type Experience = {
	id: number;
	title: string;
	location: string;
	logo: string,
	links: Link[]
	company: string;
	workingRange: string;
	content: ReactElement;
}

export const getExperiences = async (): Promise<Experience[]> => {
	const experiences = await getContents<Experience>('experiences');
	return experiences.map((e) => ({ ...e.frontmatter, content: e.content }))
		.toSorted((a, b) => a.id - b.id);
};