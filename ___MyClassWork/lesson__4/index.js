let counter = 0;
while (counter < 50) {
	document.write(`<h1> Итерация №"</h1>` + counter);
	console.log("Итерация №" + counter);
	counter = counter + 1;
}

for (variable = 0; variable <= 24; variable++) {
	console.log("Вывод №" + variable);
}

let sum = +prompt("На какую сумму вы сделали заказ");
if (sum > 1000) {
	document.write(`<h1>Поздравляем, вы получаете скидку = 10%</h1>`);
} else {
	document.write(
		`<h1>Закажите товаров на сумму более 1000 грн - и получите скидку в размере 10% от суммы заказа</h1>`
	);
}

let sumDiscount = +prompt("На какую сумму вы сделали заказ");

let res =
	sumDiscount > 1000
		? "Поздравляем, вы получаете скидку = 10%"
		: "Закажите товаров на сумму более 1000 грн - и получите скидку в размере 10% от суммы заказа";
document.write(res);

let dayNumber = 22;

switch (dayNumber) {
	case 0:
		document.write(`<h1>Понедельник</h1>`);
		break;
	case 1:
		document.write(`<h1>Вторник</h1>`);
		break;
	case 2:
		document.write(`<h1>Среда</h1>`);
		break;
	case 3:
		document.write(`<h1>Четверг</h1>`);
		break;
	case 4:
		document.write(`<h1>Пятница</h1>`);
		break;
	case 5:
		document.write(`<h1>Суббота</h1>`);
		break;
	case 6:
		document.write(`<h1>Восресенье</h1>`);
		break;
	default:
		document.write(`<h1>оЧибка</h1>`);
}

let version = "pro";

switch (version) {
	case "light edition":
		document.write(`<h1>light edition</h1>`);
		break;
	case "pro":
		document.write(`<h1>pro</h1>`);
		break;
	case "ultimate":
		document.write(`<h1>ultimate</h1>`);
		break;
	case "mixed edition":
		document.write(`<h1>mixed edition</h1>`);
		break;
	default:
		document.write(`<h1> Уточните версию продукта</h1>`);
}
