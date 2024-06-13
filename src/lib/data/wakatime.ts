// $.ajax({
// 	type: 'GET',
// 	url: 'https://wakatime.com/share/@amalhanaja/f30e0f30-8e7d-4500-ae39-482a974a75d5.json',
// 	dataType: 'jsonp',
// 	success: function (response) {
// 		console.log(response.data);
// 	}
// });

import { WAKATIME_SHAREABLE_CODING_ACTIVITY_TABLE_URL } from '$env/static/private';
import { formatToyyyyMMdd } from '$lib/helpers/formatter';
import { ActivityType, type Activity } from '$lib/model';

export const getWakatimeCodingActivity = async (): Promise<Activity[]> => {
	const response = await fetch(WAKATIME_SHAREABLE_CODING_ACTIVITY_TABLE_URL);
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
