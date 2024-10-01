// while (condition) {
// 	let randomNumber = Math.floor(Math.random() * 100) + 1;

// 	let userPrintedNumber = +prompt("Введите любое число до от 0 - 100");

// 	if (userPrintedNumber == randomNumber) {
// 		alert("Огооо!! Поздравляю!! Вы угдали число!!! --->" + randomNumber);
// 	} else if (userPrintedNumber < randomNumber) {
// 		alert("Маловато... берите выше)))");
// 	} else if (userPrintedNumber > randomNumber) {
// 		("Перебор ))) вводите поменше цифр)))");
// 	}
// }
let randomNumber = Math.floor(Math.random() * 100) + 1;

while (true) {
	let userPrintedNumber = Number(prompt("Введите любое число до от 0 - 100"));

	if (userPrintedNumber == randomNumber) {
		alert("Огооо!! Поздравляю!! Вы угдали число!!! ---> " + randomNumber);
		break;
	} else if (userPrintedNumber < randomNumber) {
		alert("Маловато... берите выше)))");
	} else if (userPrintedNumber > randomNumber) {
		alert("Перебор ))) вводите поменше цифр)))");
	}
}
