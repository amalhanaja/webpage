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
import type { ActivityDuration } from '$lib/model';

export const getWakatimeCodingActivity = async (): Promise<ActivityDuration[]> => {
	const response = await fetch(WAKATIME_SHAREABLE_CODING_ACTIVITY_TABLE_URL);
	const body: WakatimeResponse = await response.json();
	return body.days.map(
		(v) =>
			({
				dateInyyyyMMdd: formatToyyyyMMdd(new Date(v.date)),
				duration: v.total
			}) satisfies ActivityDuration
	);
};

type WakatimeResponse = {
	days: Day[];
};

type Day = {
	date: string;
	total: number;
};
