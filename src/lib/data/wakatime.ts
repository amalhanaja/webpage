import { env } from '$env/dynamic/private';
import { formatToyyyyMMdd } from '$lib/helpers/formatter';
import { ActivityType, type Activity } from '$lib/model';

export const getWakatimeCodingActivity = async (): Promise<Activity[]> => {
	const response = await fetch(env.WAKATIME_SHAREABLE_CODING_ACTIVITY_TABLE_URL);
	const body: WakatimeResponse = await response.json();
	return body.days
		.filter((v) => v.total > 60 * 60)
		.map(
			(v) =>
				({
					dateInyyyyMMdd: formatToyyyyMMdd(new Date(v.date)),
					value: v.total,
					activityType: ActivityType.WAKATIME
				}) satisfies Activity
		);
};

type WakatimeResponse = {
	days: Day[];
};

type Day = {
	date: string;
	total: number;
};
