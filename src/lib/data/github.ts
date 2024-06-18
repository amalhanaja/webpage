import { formatToyyyyMMdd } from '$lib/helpers/formatter';
import { ActivityType, type Activity } from '$lib/model';
import { GH_ACCESS_TOKEN } from '$env/static/private';

type GithubResponse = {
	data: Data;
};

type Data = {
	user: User;
};

type User = {
	contributionsCollection: ContributionsCollection;
};

type ContributionsCollection = {
	contributionCalendar: ContributionCalendar;
};

type ContributionCalendar = {
	totalContributions: number;
	weeks: Week[];
};

type Week = {
	contributionDays: ContributionDay[];
};

type ContributionDay = {
	contributionCount: number;
	date: string;
};

export const getContributionCalendar = async (username: string): Promise<Activity[]> => {
	const query = `
    query($userName:String!) { 
        user(login: $userName){
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                }
              }
            }
          }
        }
      }
    `;
	const variables = {
		userName: username
	};
	const jsonBody = {
		query: query,
		variables: variables
	};
	const response = await fetch('https://api.github.com/graphql', {
		method: 'post',
		headers: {
			Authorization: `Bearer ${GH_ACCESS_TOKEN}`
		},
		body: JSON.stringify(jsonBody)
	});
	const body: GithubResponse = await response.json();
	return body.data.user.contributionsCollection.contributionCalendar.weeks
		.map((week) =>
			week.contributionDays
				.filter((v) => v.contributionCount != 0)
				.map(
					(contributionDay) =>
						({
							activityType: ActivityType.GITHUB,
							dateInyyyyMMdd: formatToyyyyMMdd(new Date(contributionDay.date)),
							value: contributionDay.contributionCount
						}) satisfies Activity
				)
		)
		.flat();
};
