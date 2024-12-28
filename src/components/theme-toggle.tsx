"use client"

import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';

export const ThemeToggle = ({ className }: { className?: string }) => {
	const { theme, setTheme } = useTheme();

	return (
		<Button
			className={cn(className)}
			variant="neutral"
			size="icon"
			onClick={() => {
				setTheme(theme === 'light' ? 'dark' : 'light');
			}}>
			<Sun className="dark:hidden" />
			<Moon className="hidden dark:block" />
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
};