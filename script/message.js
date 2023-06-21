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

const isContinuousSequence = (arr) => {
  let isTrue = 0;
  let isFalse = 0;

  for(let i = 0, j = 1; i < arr.length && j < arr.length; i++, j++) {

    if((Math.abs(arr[j]) - Math.abs(arr[i])) === 1 || (Math.abs(arr[j]) - Math.abs(arr[i])) === -1) {
      isTrue += 1;
    } else {
      return false;
    }
  }

  if(isTrue > isFalse) {
    return true;
  }
}


const PI = 3.14;

export {sayHi, getSum, abs, PI, Person, isContinuousSequence};