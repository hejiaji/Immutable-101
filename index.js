var Immutable = require('immutable');

const testA = {
	a: 1,
	b: true,
	c: {
		d: "yes"
	}
};

const testB = { ...testA };

console.log(testA === testB); // false

test1 = Immutable.Map({
	a: 1,
	b: true,
	c: Immutable.Map({
		d: "yes"
	})
});
test2 = Immutable.Map({
	a: 1,
	b: true,
	c: Immutable.Map({
		d: "yes"
	})
});
console.log(test1.equals(test2)); // true