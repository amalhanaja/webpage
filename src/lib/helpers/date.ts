export const getLastYear = (): Date => {
	const now = new Date();
	const oneYear = 364 * 24 * 60 * 60 * 1000;
	const lastYear = new Date(now.getTime() - oneYear);
	return lastYear;
};
