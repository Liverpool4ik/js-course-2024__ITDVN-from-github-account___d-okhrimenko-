//  НАЙТИ --- Минимальное и Максимальное значение в Массиве

let numbers = [20, 11, 30, 21, 40, 1, 50, -1, 100, 101, 0, -1, 2, 3];

//===================================== find --->> Min Value
function findMinNumber(array) {
	// return Math.min(...array);

	let min = Number.MAX_VALUE;
	for (const numbers of array) {
		if (numbers < min) {
			min = numbers;
		}
	}
	return min;
}

const minNumber = findMinNumber(numbers);
console.log(minNumber);

//
//
//===================================== find --->> MAX Value
function findMaxNumber(array) {
	// return Math.max(...array);

	let max = Number.MIN_VALUE;
	for (const numbers of array) {
		if (numbers > max) {
			max = numbers;
		}
	}
	return max;
}
const maxNumber = findMaxNumber(numbers);
console.log(maxNumber);

//
//
//===================================== find --->> sum of Array Numbers

function summOfArray(array) {
	let sum = 0;
	for (const numbers of array) {
		sum += numbers; //  <====  sum = sum + value;
	}
	return sum;
}
console.log(summOfArray(numbers));
