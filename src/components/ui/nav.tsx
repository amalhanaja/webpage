'use client';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import { Logo } from '@/components/logo';
import { ThemeToggle } from '@/components/theme-toggle';

type NavItemState = {
	href: string;
	label: string;
}

type IndicatorState = {
	left: number;
	width: number;
	height: number;
	opacity: number;
}

const items = [
	{
		href: '#experiences',
		label: 'Experiences'
	},
	{
		href: '#projects',
		label: 'Projects'
	},
	{
		href: '#articles',
		label: 'Articles'
	}
] satisfies NavItemState[];

export const Nav = () => {
	const ulRef = useRef<HTMLUListElement>(null);
	const [indicatorState, setIndicatorState] = useState<IndicatorState>({
		left: 0,
		width: 0,
		height: 0,
		opacity: 0
	});
	useEffect(() => {
		if (!ulRef.current) return;
		const rect = ulRef.current.getBoundingClientRect();
		const height = rect.height - 20;
		setIndicatorState(prev => ({ ...prev, height: height }));
	}, [ulRef]);
	const hideIndicator = () => {
		setIndicatorState(prev => ({ ...prev, opacity: 0 }));
	};
	const [isNavHidden, setIsNavHidden] = useState(false);
	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, 'change', (y) => {
		const prev = scrollY.getPrevious() ?? 0;
		const threshold = 150;
		setIsNavHidden(y > prev && y > threshold);
	});
	return (
		<motion.nav
			className="sticky top-0 pt-4 px-1 z-20"
			animate={isNavHidden ? 'hidden' : 'visible'}
			variants={{
				hidden: {
					y: '-90%'
				},
				visible: {
					y: 0
				}
			}}
			transition={{ duration: 0.25 }}
			whileHover="visible"
		>
			<ul
				ref={ulRef}
				onMouseLeave={hideIndicator}
				className={
					cn(
						'relative mx-auto flex w-fit rounded-lg border-2 p-2',
						'bg-background'
					)
				}
			>
				<motion.li className="justify-center items-center mx-2 hidden md:flex" onMouseEnter={hideIndicator}>
					<Link href="/"><Logo className="size-8" /></Link>
				</motion.li>
				<li><Separator orientation="vertical" className="hidden md:block mx-2" /></li>
				{items.map((item) => (
					<NavItem key={item.href} state={item} setIndicatorState={setIndicatorState} />
				))}
				<li><Separator orientation="vertical" className="hidden md:block mx-2" /></li>
				<motion.li className="hidden md:flex justify-center items-center mx-2" onMouseEnter={hideIndicator}>
					<ThemeToggle className="-translate-x-0.5 -translate-y-0.5 shadow-sm hover:translate-x-0 hover:translate-y-0 hover:shadow-none" />
				</motion.li>
				<Indicator state={indicatorState} />
			</ul>
		</motion.nav>
	);
};

type NavItemProps = {
	state: NavItemState;
	setIndicatorState: (state: IndicatorState) => void;
}

const NavItem = ({ state, setIndicatorState }: NavItemProps) => {
	const ref = useRef<HTMLLIElement | null>(null);
	const onMouseEnter = () => {
		if (!ref.current) return;
		const rect = ref.current.getBoundingClientRect();
		setIndicatorState({
			left: ref.current.offsetLeft,
			width: rect.width,
			height: rect.height,
			opacity: 1
		});
	};
	return (
		<motion.li
			ref={ref}
			onMouseEnter={onMouseEnter}
			className={cn(
				'relative z-10 block cursor-pointer px-2 py-1 flex-1 uppercase text-sm font-semibold sm:text-lg sm:px-4',
				'mix-blend-difference text-background dark:text-foreground'
			)}
		>
			<Link href={state.href}>{state.label}</Link>
		</motion.li>
	);
};

const Indicator = ({ state }: { state: IndicatorState }) => {
	return (
		<motion.li animate={{ ...state }} className="absolute z-0 rounded-md bg-foreground" />
	);
};