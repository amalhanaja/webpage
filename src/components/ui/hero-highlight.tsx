'use client';
import { cn } from '@/lib/utils';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import React from 'react';

export const HeroHighlight = ({
																children,
																className,
																containerClassName
															}: {
	children: React.ReactNode;
	className?: string;
	containerClassName?: string;
}) => {
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	function handleMouseMove({
														 currentTarget,
														 clientX,
														 clientY
													 }: React.MouseEvent<HTMLDivElement>) {
		if (!currentTarget) return;
		const { left, top } = currentTarget.getBoundingClientRect();

		mouseX.set(clientX - left);
		mouseY.set(clientY - top);
	}

	return (
		<div
			className={cn(
				'relative bg-background justify-center w-full group',
				containerClassName
			)}
			onMouseMove={handleMouseMove}
		>
			<div className="absolute inset-0 bg-dot-thick-stone-300 dark:bg-dot-thick-stone-800  pointer-events-none" />
			<motion.div
				className="pointer-events-none bg-dot-thick-stone-950 dark:bg-dot-thick-stone-50 absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
				style={{
					WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              100px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
					maskImage: useMotionTemplate`
            radial-gradient(
              100px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `
				}}
			/>

			<div className={cn('relative z-10', className)}>{children}</div>
		</div>
	);
};