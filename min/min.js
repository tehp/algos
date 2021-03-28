module.exports = function (x) {
	let current_min = x[0];
	if (x.length > 1) {
		for (key in x) {
			if (x[key] < current_min) {
				current_min = x[key];
			}
		}
	}
	return current_min;
}

