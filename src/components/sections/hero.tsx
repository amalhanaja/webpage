import { HeroHighlight } from '@/components/ui/hero-highlight';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileUser } from 'lucide-react';

const greetingContent = {
	name: 'Alfian Akmal Hanantio',
	title: 'Software Engineer',
	shortDescription: 'Software Engineer with a thirst for knowledge and a dedication to crafting elegant and efficient solutions. Constantly exploring new technologies and best practices.'
};

const GreetingBlock = () => {
	return (
		<Card className="shadow-none col-span-12 px-6 py-12 flex flex-col gap-4">
			<h1 className="text-5xl font-black uppercase">{greetingContent.name}</h1>
			<h2 className="font-bold text-3xl text-primary uppercase">{greetingContent.title}</h2>
			<p className="text-lg">{greetingContent.shortDescription}</p>
			<Button className="uppercase mt-6 sm:w-fit" size="lg"><FileUser />Resume</Button>
		</Card>
	);
};

export const Hero = () => {
	return (
		<section id="hero">
			<HeroHighlight containerClassName="py-16 sm:py-20 px-4">
				<div className="grid mx-auto max-w-screen-xl grid-cols-12 gap-4">
					<GreetingBlock />
				</div>
			</HeroHighlight>
		</section>
	);
};