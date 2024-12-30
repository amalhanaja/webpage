import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
	'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border-2 duration-250 transition-all font-semibold',
	{
		variants: {
			variant: {
				primary:
					'bg-primary text-primary-foreground',
				destructive:
					'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
				neutral:
					'bg-background text-foreground'
			},
			size: {
				default: 'h-9 px-4 py-2 -translate-x-1 -translate-y-1 shadow hover:translate-x-0 hover:translate-y-0 hover:shadow-none',
				sm: 'h-8 rounded-md px-3 text-xs',
				lg: 'h-12 rounded-md text-lg px-8 -translate-x-1 -translate-y-1 shadow hover:translate-x-0 hover:translate-y-0 hover:shadow-none [&_svg]:size-6',
				icon: 'h-9 w-9 -translate-x-1 -translate-y-1 shadow hover:translate-x-0 hover:translate-y-0 hover:shadow-none'
			}
		},
		defaultVariants: {
			variant: 'primary',
			size: 'default'
		}
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : 'button';
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);
Button.displayName = 'Button';

export { Button, buttonVariants };
