'use client';

import Marquee from '@/components/ui/marquee';
import { cn } from '@/lib/utils';
import zulfa from '../../../public/testimonials/zulfa.jpeg';
import filbert from '../../../public/testimonials/filbert.jpeg';
import ricky from '../../../public/testimonials/ricky.jpeg';
import Image, { StaticImageData } from 'next/image';

const reviews = [
	{
		name: 'Muhammad Zulfa Febriyanto', //Newfire Global Partners
		title: 'Senior Frontend Engineer',
		body: 'Alfian is always eager to take on new challenges and projects, and he approaches each task with creativity and attention to detail.',
		img: zulfa
	},
	{
		name: 'Filbert Wijaya', // Baskit
		title: 'QA Engineer',
		body: 'Alfian\'s strong communication skills and collaborative approach made him a valuable member of the team.',
		img: filbert
	},
	{
		name: 'Ricky Ariansyah', // Permata Bank
		title: 'Software Engineer',
		body: 'Alfian has a deep understanding of the Android platform and a talent for delivering high-quality, scalable and user-friendly applications.',
		img: ricky
	}
];

const ReviewCard = ({
											img,
											name,
											title,
											body
										}: {
	img: StaticImageData;
	name: string;
	title: string;
	body: string;
}) => {
	return (
		<figure
			className={cn(
				'relative w-72 cursor-pointer overflow-hidden rounded-xl border shadow-sm p-4 transition-all duration-250',
				// light styles
				'bg-background hover:shadow-lg hover:scale-105 hover:-translate-x-1 hover:-translate-y-1'
			)}
		>
			<div className="flex flex-row items-center gap-2">
				<Image className="rounded-full shadow-sm border" width="32" height="32" alt="" src={img} />
				<div className="flex flex-col">
					<figcaption className="text-sm font-semibold text-card-foreground">
						{name}
					</figcaption>
					<p className="text-xs font-medium text-card-foreground opacity-60">{title}</p>
				</div>
			</div>
			<blockquote className="mt-2 text-sm">{body}</blockquote>
		</figure>
	);
};

export function TestimonialsMarquee() {
	return (
		<div
			className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-card">
			<Marquee pauseOnHover className="[--duration:20s] p-4">
				{reviews.map((review) => (
					<ReviewCard key={review.title} {...review} />
				))}
			</Marquee>
			<div
				className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-card"></div>
			<div
				className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-card"></div>
		</div>
	);
}


export const Testimonials = () => {
	return (
		<section id="testimonials" className="bg-card border-t-4 border-b-4">
			<div className="flex flex-col w-full: max-w-screen-xl mx-auto gap-4 px-4 py-8">
				<TestimonialsMarquee />
			</div>
		</section>
	);
};