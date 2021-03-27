const test = require('ava');
const reverse_array = require('./reverse_array');

test('reverse even', t => {
	t.deepEqual(reverse_array([1, 2, 3, 4]), [4, 3, 2, 1]);
});

test('reverse odd', t => {
	t.deepEqual(reverse_array([1, 2, 3]), [3, 2, 1]);
});
