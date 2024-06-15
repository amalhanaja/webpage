export type Profile = {
	name: string;
	headline: string;
	shortBio: string;
	profilePicture: string;
	skills: Record<string, Skill>;
};

export type Skill = {
	name: string;
};

export type Contact = {
	label: string;
	url: string;
	icon: string;
	username: string;
};

export type Project = {
	name: string;
	description: string;
	skills: string[];
	imageUrl: string;
	link?: string;
	repoUrl?: string;
};

export enum ActivityType {
	CODEWARS,
	GITHUB,
	WAKATIME
}

export type Activity = {
	activityType: ActivityType;
	dateInyyyyMMdd: string;
	value: number;
};

export type ArticleSummary = {
	link: string;
	title: string;
	tags: {
		id: string;
		name: string;
	}[];
	brief: string;
	coverImageUrl: string;
};
