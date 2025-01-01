"use client"

import { useTheme } from 'next-themes';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import GitHubCalendar from 'react-github-calendar';

export const GithubContributions = () => {
	const { theme } = useTheme();
	return (
		<Card className="shadow-none col-span-12 sm:col-span-8">
			<CardHeader>
				<CardTitle><h2 className="text-3xl font-bold uppercase">My Github activities</h2></CardTitle>
			</CardHeader>
			<CardContent>
				<GitHubCalendar username="amalhanaja" colorScheme={theme === 'dark' ? 'dark' : 'light'} blockSize={12}
												blockMargin={3} />
			</CardContent>
		</Card>
	);
};