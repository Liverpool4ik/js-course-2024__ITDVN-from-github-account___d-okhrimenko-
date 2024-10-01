function typeNumber(message) {
	while (true) {
		let value = prompt(message);
		let isValid = !isNaN(value) && value !== "" && value !== null;
		if (isValid) return Number(value);
	}
}
let start = typeNumber("Введите начало диапазона");
let end = typeNumber("Введите конец диапазона");

if (end < start) {
	document.write(
		`<h1>Произошла ошибка, т.к. начало диапазона неможет быть больше чем конец диапазона</h1>`
	);
} else {
	sum = 0;
	for (let i = start; i <= end; i++) {
		sum = sum + i;
	}
	document.write(
		`<h1>Сумма всех цифр введённых от ${start} и до ${end} будут равны ${sum}</h1>`
	);
}
