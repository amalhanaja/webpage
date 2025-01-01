'use client';

import { HeroHighlight } from '@/components/ui/hero-highlight';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileUser } from 'lucide-react';
import Image from 'next/image';
import me from '../../../public/me.png';
import IconCloud from '@/components/ui/icon-cloud';
import GitHubCalendar from 'react-github-calendar';
import { useTheme } from 'next-themes';
import { SiGithub, SiHashnode, SiLinkedin, SiTiktok, SiX, SiYoutube } from 'react-icons/si';
import { useAnimate } from 'framer-motion';
import { IconType } from 'react-icons';
import { MouseEventHandler } from 'react';

export type HeroProps = {
	name: string;
	title: string;
	imageProfileWordList: string;

}

const GreetingBlock = ({ name, title }: HeroProps) => {
	return (
		<Card className="shadow-none col-span-12 px-6 py-12 flex flex-col gap-4 sm:col-span-8 lg:justify-center">
			<h1 className="text-5xl font-black uppercase">{name}</h1>
			<h2 className="font-bold text-3xl text-primary uppercase">{title}</h2>
			<p className="text-xl tracking-wide leading-8">
				Building secure, scalable, and accessible digital products for enterprises and fintech industries since 2017.
				I am currently working as a <span
				className="border-b-4 font-bold border-primary">Senior Android Developer</span> at Digital
				Daya Teknologi.
			</p>
			<Button className="uppercase mt-6 sm:w-fit" size="lg"><FileUser />Download Resume</Button>
		</Card>
	);
};

const ImageProfileBlock = ({ imageProfileWordList, name }: HeroProps) => {
	return (
		<Card className="shadow-none col-span-12 flex flex-col gap-4 overflow-clip relative sm:col-span-4">
			<p
				className="absolute inset-x-0 text-4xl h-full break-words whitespace-pre-wrap font-mono font-black italic transition duration-500 uppercase text-justify">
				{imageProfileWordList}
			</p>
			<Image src={me} alt={name} className="translate-y-10 h-full w-full object-cover" />
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
	'shadcnui',
	'tailwindcss',
	'java',
	'apachekafka',
	'jenkins'
];

const ToolsBlock = () => {
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

const GithubCalendarBlock = () => {
	const { theme } = useTheme();
	return (
		<Card className="shadow-none col-span-12 sm:col-span-8">
			<CardHeader>
				<CardTitle><h2 className="text-3xl font-bold uppercase">My Github activities</h2></CardTitle>
			</CardHeader>
			<CardContent>
				<GitHubCalendar username="amalhanaja" colorScheme={theme === 'dark' ? 'dark' : 'light'} blockSize={12}
												blockMargin={3} />
			</CardContent>
		</Card>
	);
};

const ClipPathLinks = () => {
	return (
		<div className="grid grid-cols-3 border-2 border-foreground bg-foreground gap-0.5">
			<LinkBox Icon={SiLinkedin} href="https://linkedin.com/in/amalhanaja" />
			<LinkBox Icon={SiGithub} href="https://github.com/amalhanaja" />
			<LinkBox Icon={SiTiktok} href="https://tiktok.com/@amalhanaja" />
			<LinkBox Icon={SiYoutube} href="https://youtube.com/@amalhanaja" />
			<LinkBox Icon={SiX} href="https://x.com/amalhanaja" />
			<LinkBox Icon={SiHashnode} href="https://hashnode.com/@amalhanaja" />
		</div>
	);
};

const NO_CLIP = 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)';
const BOTTOM_RIGHT_CLIP = 'polygon(0 0, 100% 0, 0 0, 0% 100%)';
const TOP_RIGHT_CLIP = 'polygon(0 0, 0 100%, 100% 100%, 0% 100%)';
const BOTTOM_LEFT_CLIP = 'polygon(100% 100%, 100% 0, 100% 100%, 0 100%)';
const TOP_LEFT_CLIP = 'polygon(0 0, 100% 0, 100% 100%, 100% 0)';

const ENTRANCE_KEYFRAMES: { [key: string]: string[] } = {
	'left': [BOTTOM_RIGHT_CLIP, NO_CLIP],
	'bottom': [BOTTOM_RIGHT_CLIP, NO_CLIP],
	'top': [BOTTOM_RIGHT_CLIP, NO_CLIP],
	'right': [TOP_LEFT_CLIP, NO_CLIP]
};

const EXIT_KEYFRAMES: { [key: string]: string[] } = {
	'left': [NO_CLIP, TOP_RIGHT_CLIP],
	'bottom': [NO_CLIP, TOP_RIGHT_CLIP],
	'top': [NO_CLIP, TOP_RIGHT_CLIP],
	'right': [NO_CLIP, BOTTOM_LEFT_CLIP]
};

const LinkBox = ({ Icon, href }: { Icon: IconType, href: string }) => {
	const [scope, animate] = useAnimate();

	const getNearestSide = (e: any) => {
		const box = e.target.getBoundingClientRect();

		const proximityToLeft = {
			proximity: Math.abs(box.left - e.clientX),
			side: 'left'
		};
		const proximityToRight = {
			proximity: Math.abs(box.right - e.clientX),
			side: 'right'
		};
		const proximityToTop = {
			proximity: Math.abs(box.top - e.clientY),
			side: 'top'
		};
		const proximityToBottom = {
			proximity: Math.abs(box.bottom - e.clientY),
			side: 'bottom'
		};

		const sortedProximity = [
			proximityToLeft,
			proximityToRight,
			proximityToTop,
			proximityToBottom
		].sort((a, b) => a.proximity - b.proximity);

		return sortedProximity[0].side;
	};

	const handleMouseEnter: MouseEventHandler<HTMLAnchorElement> = (e) => {
		const side = getNearestSide(e);


		animate(scope.current, {
			clipPath: ENTRANCE_KEYFRAMES[side]
		});
	};

	const handleMouseLeave: MouseEventHandler<HTMLAnchorElement> = (e) => {
		const side = getNearestSide(e);

		animate(scope.current, {
			clipPath: EXIT_KEYFRAMES[side]
		});
	};

	return (
		<a
			href={href}
			onMouseEnter={(e) => {
				handleMouseEnter(e);
			}}
			onMouseLeave={(e) => {
				handleMouseLeave(e);
			}}
			className="relative grid w-full place-content-center px-4 py-4 lg:py-8 xl:py-10 bg-background"
			target="_blank"
		>
			<Icon className="text-2xl" />

			<div
				ref={scope}
				style={{
					clipPath: BOTTOM_RIGHT_CLIP
				}}
				className="absolute inset-0 grid place-content-center bg-foreground text-background"
			>
				<Icon className="text-2xl" />
			</div>
		</a>
	);
};

const SocialsBlock = () => {
	return (
		<Card className="shadow-none col-span-12 sm:col-span-8">
			<CardHeader>
				<CardTitle><h2 className="text-3xl font-bold uppercase">Find me here</h2></CardTitle>
			</CardHeader>
			<CardContent>
				<ClipPathLinks />
			</CardContent>
		</Card>
	);
};

export const Hero = (props: HeroProps) => {
	return (
		<section id="hero">
			<HeroHighlight containerClassName="py-16 sm:py-20 px-4">
				<div className="grid mx-auto max-w-screen-xl grid-cols-12 gap-2">
					<GreetingBlock {...props} />
					<ImageProfileBlock {...props} />
					<ToolsBlock />
					<GithubCalendarBlock />
					<SocialsBlock />
				</div>
			</HeroHighlight>
		</section>
	);
};