module.exports = function (x) {
	let i = 0;
	let prefix = '';
	while (true) {
		let common = true;
		let letter = x[0].charAt(i);
		for (string in x) {
			if (x[string].charAt(i) != letter) {
				common = false;
				break;
			}
		}
		if (common) {
			prefix += letter;
			i++;
		} else {
			break;
		}
	}
	return prefix;
}
