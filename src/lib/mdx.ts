import { promises as fs } from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import { Project } from '@/service/project';

export const getContents = async <T>(dir: string): Promise<{ content: React.ReactElement; frontmatter: T }[]> => {
	const files = await fs.readdir(path.join(process.cwd(), 'contents', dir));
	return await Promise.all(files.map(async file => {
		const fileContent = await fs.readFile(path.join(process.cwd(), 'contents', dir, file), 'utf8');
		const { content, frontmatter } = await compileMDX<Project>({
			source: fileContent,
			options: {
				parseFrontmatter: true
			}
		});
		return { content, frontmatter: frontmatter as T };
	}));
};