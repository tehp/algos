const test = require('ava');
const largest_common_prefix = require('./largest_common_prefix.js');

test('Multiple letters', t => {
	t.is(largest_common_prefix(["foo","foobar","food"]), "foo");
});

test ('Nothing in common', t => {
	t.is(largest_common_prefix(["foo","bar","baz"]), "");
});

test ('One character in common', t => {
	t.is(largest_common_prefix(["foo","f"]), "f");
});
