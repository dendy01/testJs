class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	info() {
		return `${this.name} ${this.age}`;
	}
}

function sayHi() {
	console.log('Hello');
}

function getSum(a, b) {
	return a + b;
}

function abs(a) {
	return a < 0 ? -a : a;
}

const PI = 3.14;

export {sayHi, getSum, abs, PI, Person};