'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import IconCloud from '@/components/ui/icon-cloud';

const icons = [
	'typescript',
	'dart',
	'react',
	'flutter',
	'android',
	'html5',
	'css3',
	'nodedotjs',
	'bun',
	'kotlin',
	'drizzle',
	'postgresql',
	'firebase',
	'supabase',
	'nginx',
	'vercel',
	'docker',
	'git',
	'jira',
	'androidstudio',
	'sonarqube',
	'figma',
	'sqlite',
	'go',
	'rust',
	'mysql',
	'miro',
	'github',
	'bitbucket',
	'gitlab',
	'mongodb',
	'nextjs',
	'svelte',
	'anytype',
	'arc',
	'python',
	'pandas',
	'tensorflow',
	'jupyter',
	'notion',
	'strapi',
	'jetpackcompose',
	'shadcnui',
	'tailwindcss',
	'java',
	'apachekafka',
	'jenkins'
];

export const Tools = () => {
	return (
		<Card className="shadow-none col-span-12 flex flex-col gap-4 sm:col-span-4 sm:row-span-2">
			<CardHeader>
				<CardTitle><h2 className="text-3xl font-bold">TOOLS I USED</h2></CardTitle>
				<CardDescription>
					Continuously learning and adapting to new tools and technologies, with
					expertise in Android Development using Kotlin
				</CardDescription>
			</CardHeader>
			<CardContent>
				<IconCloud iconSlugs={icons} />
			</CardContent>
		</Card>
	);
};