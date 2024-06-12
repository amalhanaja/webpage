export type Profile = {
	name: string;
	headline: string;
	shortBio: string;
	profilePicture: string;
	projects: Project[];
	skills: Record<string, Skill>;
};

export type Skill = {
	name: string;
};

export type Contact = {
	label: string;
	url: string;
	icon: string;
};

export type Project = {
	name: string;
	description: string;
	skills: string[];
	link?: string;
	repoUrl?: string;
};
