export const formatTime = (minutes: number) => {
	if (minutes < 60) return `${minutes} Min`;
	const hours = Math.floor(minutes / 60);
	const mins = minutes % 60;
	return mins === 0 ? `${hours} Hour` : `${hours} Hour ${mins} Min`;
};
