export const getRandomNumberInRange = (min: number, max: number): number => {
	// Ensure min <= max
	if (min > max) {
		throw new Error('Invalid range: minimum cannot be greater than maximum');
	}

	// Calculate the range (inclusive)
	const rangeLength = max - min + 1;

	// Use Math.floor and modulo to get a random integer within the range
	return Math.floor(Math.random() * rangeLength) + min;
};
