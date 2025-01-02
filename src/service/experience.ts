"use server"

import { promises as fs } from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import { ReactElement } from 'react';

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
	const files = await fs.readdir(path.join(process.cwd(), 'contents', 'experiences'));
	console.log(files);
	const experiences = await Promise.all(files.map(async file => {
		const fileContent = await fs.readFile(path.join(process.cwd(), 'contents', 'experiences', file), 'utf8');
		const { content, frontmatter } = await compileMDX<Experience>({
			source: fileContent,
			options: {
				parseFrontmatter: true
			}
		});
		return { content, frontmatter };
	}));
	return experiences.map((e) => ({ ...e.frontmatter, content: e.content }))
		.toSorted((a, b) => a.id - b.id);
};