function deretPersegi(n) {
	let deret = [];
	for (let i = 1; i <= n; i++) {
		deret.push(i * i);
	}
	return deret;
}

console.log(deretPersegi(10));
