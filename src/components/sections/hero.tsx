'use client';

import { HeroHighlight } from '@/components/ui/hero-highlight';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileUser } from 'lucide-react';
import Image from 'next/image';
import me from '../../../public/me.png';

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

export const Hero = (props: HeroProps) => {
	return (
		<section id="hero">
			<HeroHighlight containerClassName="py-16 sm:py-20 px-4">
				<div className="grid mx-auto max-w-screen-xl grid-cols-12 gap-4">
					<GreetingBlock {...props} />
					<ImageProfileBlock {...props} />
				</div>
			</HeroHighlight>
		</section>
	);
};