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
