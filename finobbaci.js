function fino(n) {
	let data = [0, 1];
	for (let i = 2; i < n; i++) {
		data.push(data[i - 1] + data[i - 2]);
	}
	return data;
}

console.log(fino(11));
