import { formatToyyyyMMdd } from '$lib/helpers/formatter';
import { ActivityType, type Activity } from '$lib/model';

type CodewarsResponse = {
	totalPages: number;
	totalItems: number;
	data: Kata[];
};

type Kata = {
	id: string;
	name: string;
	slug: string;
	completedLanguages: string[];
	completedAt: string;
};

export const getCompletedKata = async (
	maxDateStr: string,
	username: string
): Promise<Activity[]> => {
	const maxDate = new Date(maxDateStr);
	maxDate.setHours(0);
	const out = new Map<string, number>();
	await getCompletedKataRecursive(maxDate, username, 0, out);
	return Array.from(out.entries()).map(
		([key, value]) =>
			({
				dateInyyyyMMdd: key,
				value: value,
				activityType: ActivityType.CODEWARS,
			}) satisfies Activity
	);
};

const getCompletedKataRecursive = async (
	maxDate: Date,
	username: string,
	page: number,
	out: Map<string, number>
): Promise<void> => {
	try {
		const response = await fetch(
			`https://www.codewars.com/api/v1/users/${username}/code-challenges/completed?page=${page}`
		);
		const { data }: CodewarsResponse = await response.json();
		for (let i = 0; i < data.length - 1; i++) {
			const kata = data[i];
			const completedAt = new Date(kata.completedAt);
			if (completedAt.getTime() < maxDate.getTime()) {
				return;
			}
			const formattedCompletedAt = formatToyyyyMMdd(completedAt);
			const prevCount = out.get(formattedCompletedAt) ?? 0;
			out.set(formattedCompletedAt, prevCount + 1);
		}
		await getCompletedKataRecursive(maxDate, username, page + 1, out);
	} catch (error) {
		console.error('Error While Get Completed Kata', error);
	}
};
