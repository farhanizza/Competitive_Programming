function generateCustomSeries(n) {
	let series = [0, 0];

	for (let i = 2; i < n; i++) {
		let nextNumber = series[i - 1] + series[i - 2] + 1;
		series.push(nextNumber);
	}

	return series;
}

const hasilDeret = generateCustomSeries(10);
console.log(hasilDeret);
