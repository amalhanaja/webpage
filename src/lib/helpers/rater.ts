import { ActivityType, type Activity } from '$lib/model';

export const rateActivity = (activity: Activity): number => {
	switch (activity.activityType) {
		case ActivityType.GITHUB:
			return rateCommitActivity(activity.value);
		case ActivityType.CODEWARS:
			return rateCompetitiveProgrammingActivity(activity.value);
		case ActivityType.WAKATIME:
			return rateProgrammingDurationActivity(activity.value);
	}
};

const rateProgrammingDurationActivity = (value: number): number => {
	switch (true) {
		case value >= 6 * 60 * 60:
			return 4;
		case value >= 4 * 60 * 60:
			return 3;
		case value >= 2 * 60 * 60:
			return 2;
		case value >= 1 * 60 * 60:
			return 1;
		default:
			return 0;
	}
};

const rateCompetitiveProgrammingActivity = (value: number): number => {
	switch (true) {
		case value >= 6:
			return 4;
		case value >= 4:
			return 3;
		case value >= 2:
			return 2;
		case value >= 1:
			return 1;
		default:
			return 0;
	}
};

const rateCommitActivity = (value: number): number => {
	switch (true) {
		case value > 15:
			return 4;
		case value >= 10:
			return 3;
		case value >= 5:
			return 2;
		case value >= 1:
			return 1;
		default:
			return 0;
	}
};
