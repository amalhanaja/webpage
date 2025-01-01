'use client';

import { SiGithub, SiHashnode, SiLinkedin, SiTiktok, SiX, SiYoutube } from 'react-icons/si';
import { IconType } from 'react-icons';
import { useAnimate } from 'framer-motion';
import { MouseEventHandler } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const ClipPathLinks = () => {
	return (
		<div className="grid grid-cols-3 border-2 border-foreground bg-foreground gap-0.5 flex-1 h-full sm:grid-cols-1 lg:grid-cols-2">
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

type SocialsProps = {
	className?: string;
}

export const Socials = ({ className }: SocialsProps) => {
	return (
		<Card className={cn('shadow-none col-span-12 sm:col-span-6 flex flex-col', className)}>
			<CardHeader>
				<CardTitle><h2 className="text-3xl font-bold uppercase">Find me here</h2></CardTitle>
			</CardHeader>
			<CardContent className="flex flex-1 flex-col">
				<ClipPathLinks />
			</CardContent>
		</Card>
	);
};