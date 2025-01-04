import {ReactElement} from 'react';
import {promises as fs} from 'fs';
import path from 'path';
import {compileMDX} from 'next-mdx-remote/rsc';

export type Project = {
    id: number;
    title: string;
    image: string;
    tags: string[];
    content: ReactElement;
    github: string;
    link: string;
}

export const getProjects = async (): Promise<Project[]> => {
    const files = await fs.readdir(path.join(process.cwd(), 'contents', 'projects'));
    const results = await Promise.all(files.map(async file => {
        const fileContent = await fs.readFile(path.join(process.cwd(), 'contents', 'projects', file), 'utf8');
        const {content, frontmatter} = await compileMDX<Project>({
            source: fileContent,
            options: {
                parseFrontmatter: true
            }
        });
        return {content, frontmatter};
    }));
    const projects = results.map((item) => ({...item.frontmatter, content: item.content}))
    projects.sort((a, b) => a.id - b.id);
    return projects
};