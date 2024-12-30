'use client';

import { HeroHighlight } from '@/components/ui/hero-highlight';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileUser } from 'lucide-react';
import Image from 'next/image';
import me from '../../../public/me.png';
import IconCloud from '@/components/ui/icon-cloud';

export type HeroProps = {
	name: string;
	title: string;
	shortDescription: string;
	imageProfileWordList: string;

}

const GreetingBlock = ({ name, title, shortDescription }: HeroProps) => {
	return (
		<Card className="shadow-none col-span-12 px-6 py-12 flex flex-col gap-4">
			<h1 className="text-5xl font-black uppercase">{name}</h1>
			<h2 className="font-bold text-3xl text-primary uppercase">{title}</h2>
			<p className="text-xl">{shortDescription}</p>
			<Button className="uppercase mt-6 sm:w-fit" size="lg"><FileUser />Download Resume</Button>
		</Card>
	);
};

const ImageProfileBlock = ({ imageProfileWordList, name }: HeroProps) => {
	return (
		<Card className="shadow-none col-span-12 flex flex-col gap-4 overflow-clip relative">
			<p
				className="absolute inset-x-0 text-4xl h-full break-words whitespace-pre-wrap font-mono font-black italic transition duration-500 uppercase text-justify">
				{imageProfileWordList}
			</p>
			<Image src={me} alt={name} className="translate-y-10" />
		</Card>
	);
};

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
	"shadcnui",
	"tailwindcss",
];

const ToolsBlock = () => {
	return (
		<Card className="shadow-none col-span-12 px-4 py-4 flex flex-col gap-4">
			<CardHeader>
				<CardTitle><h2 className="text-3xl font-bold">TOOLS I USED</h2></CardTitle>
				<CardDescription className="text-lg">Continuously learning and adapting to new tools and technologies, with
					expertise in Android Development using Kotlin</CardDescription>
			</CardHeader>
			<CardContent>
				<IconCloud iconSlugs={icons} />
			</CardContent>
		</Card>
	);
};

export const Hero = (props: HeroProps) => {
	return (
		<section id="hero">
			<HeroHighlight containerClassName="py-16 sm:py-20 px-4">
				<div className="grid mx-auto max-w-screen-xl grid-cols-12 gap-4">
					<GreetingBlock {...props} />
					<ImageProfileBlock {...props} />
					<ToolsBlock />
				</div>
			</HeroHighlight>
		</section>
	);
};