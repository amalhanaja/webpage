export const formatToyyyyMMdd = (date: Date): string => {
	const year = date.getFullYear().toString().padStart(4, '0');
	const month = (date.getMonth() + 1).toString().padStart(2, '0');
	const day = date.getDate().toString().padStart(2, '0');
	return `${year}-${month}-${day}`;
};

export const formatDuration = (seconds: number): string => {
	// Calculate hours and minutes
	const hours = Math.floor(seconds / 3600);
	const minutes = Math.floor((seconds % 3600) / 60);

	// Ensure two digits for hours and minutes (leading zeros if needed)
	const formattedHours = hours != 0 ? hours.toString() + 'h' : '';
	const formattedMinutes = minutes != 0 ? minutes.toString().padStart(2, '0') + 'm' : '';

	// Return formatted string
	return `${formattedHours} ${formattedMinutes}`;
};
