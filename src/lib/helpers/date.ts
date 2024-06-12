export const getLastYear = (): Date => {
	const now = new Date();
	const lastYear = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
	lastYear.setDate(lastYear.getDate() - lastYear.getDay());
	return lastYear;
};
