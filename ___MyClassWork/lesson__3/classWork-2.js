let birthYear = +prompt("Введите ваше год рождения");
let currentYear = new Date().getFullYear();

let userAge = currentYear - birthYear;

const adultAge = 18;

alert(`Фокус хотите???`);
alert(`Вам ${userAge} лет`);
alert(`Как считает вы нам подходите по возрасту?`);

if (userAge >= adultAge) {
	alert(`Конечно подходите, ведь вам уже больше 18лет`);
} else {
	alert(
		`К сожалению, по закону мы не можем нанинмать сотрудников младше 18 лет`
	);
}
