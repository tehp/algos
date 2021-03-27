module.exports = function(x) {
	if (x.length >= 1) {
		let l = 0;
		let r = x.length - 1;
		while (l < r) {
			let hold = x[r];
			x[r] = x[l];
			x[l] = hold;
			l++;
			r--;
		}
	}
	return x;
}

