function generateSeries(n) {
	let series = [];
	let currentNumber = 1;
	let increment = 1;

	for (let i = 0; i < n; i++) {
		series.push(currentNumber);
		currentNumber += increment;
		increment += 2;
	}

	return series;
}

console.log(generateSeries(10));
