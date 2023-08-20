export type SocialMediaType =
	| 'linkedin'
	| 'youtube'
	| 'twitter'
	| 'tiktok'
	| 'github'
	| 'instagram';

export type SocialMediaInfo = {
	key: SocialMediaType;
	url: string;
};
