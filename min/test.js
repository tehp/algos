const test = require('ava');
const min = require('./min');

test('Min 3, 1, 2', t => {
	t.is(min([3, 1, 2]), 1);
});

test('Negative min', t => {
	t.is(min([1, -100, 2]), -100);
})
