'use client';

import { cn } from '@/lib/utils';
import * as React from 'react';

const SectionTitle = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn(
			'flex flex-row gap-4 cursor-pointer w-fit items-center',
			'text-lg font-semibold uppercase border-2 py-2 px-4 bg-background text-foreground tracking-wide',
			className
		)}
		{...props}
	/>
));
SectionTitle.displayName = 'CardTitle';

export { SectionTitle };