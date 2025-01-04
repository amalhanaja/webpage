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
    const results = await getContents<Experience>('experiences');
    const experiences = results.map((e) => ({...e.frontmatter, content: e.content}))
    experiences.sort((a, b) => a.id - b.id);
    return experiences
};