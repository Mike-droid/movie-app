function getRandomHour(availableHours) {
	const index = Math.floor(Math.random() * availableHours.length);
	const hour = availableHours[index];
	availableHours.splice(index, 1); //* Remove the selected hour from the array
	return hour;
}

export function generateRandomHours() {
	const availableHours = [
		'1:00pm',
		'2:30pm',
		'4:00pm',
		'5:30pm',
		'7:00pm',
		'8:30pm',
		'10:00pm',
	];
	const hours = [];

	for (let i = 0; i < 3; i++) {
		let hour = getRandomHour(availableHours);
		hours.push(hour);
	}

	return hours;
}
