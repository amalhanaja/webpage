'use client';
import { motion, useMotionValueEvent, useScroll } from 'motion/react';
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
		href: '/experiences',
		label: 'Experiences'
	},
	{
		href: '/projects',
		label: 'Projects'
	},
	{
		href: '/blogs',
		label: 'Blogs'
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
			className="fixed top-0 pt-2 px-1 z-30 flex flex-row sm:px-4 w-full"
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
			<div className="bg-card border-2 p-2 rounded-lg mx-auto w-fit sm:flex sm:w-full max-w-screen-xl">
				<div className="justify-center items-center mx-2 hidden sm:flex">
					<Link href="/" aria-label="Alfian Akmal Hanantio" title="Alfian Akmal Hanantio">
                        <Logo className="size-8" />
                    </Link>
				</div>
				<Separator orientation="vertical" className="hidden sm:block mx-2" />
				<div className="flex-1">
					<ul
						ref={ulRef}
						onMouseLeave={hideIndicator}
						className="relative mx-auto flex w-fit"
					>
						{items.map((item) => (
							<NavItem key={item.href} state={item} setIndicatorState={setIndicatorState} />
						))}
						<Indicator state={indicatorState} />
					</ul>
				</div>
				<Separator orientation="vertical" className="hidden sm:block mx-2" />
				<div className="hidden sm:flex justify-center items-center mx-2">
					<ThemeToggle
						className="-translate-x-0.5 -translate-y-0.5 shadow-sm hover:translate-x-0 hover:translate-y-0 hover:shadow-none" />
				</div>
			</div>
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
				'mix-blend-difference text-background dark:text-card-foreground'
			)}
		>
			<Link href={state.href} aria-label={state.label} title={state.label}>{state.label}</Link>
		</motion.li>
	);
};

const Indicator = ({ state }: { state: IndicatorState }) => {
	return (
		<motion.li animate={{ ...state }} className="absolute z-0 rounded-md bg-card-foreground" />
	);
};