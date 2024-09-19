let today = new Date();
let todayTOString = today.toDateString();
// let daysArray = [
// 	"Понедельник",
// 	"Вторник",
// 	"Среда",
// 	"Четверг",
// 	"Пятница",
// 	"Суббота",
// 	"Воскресенье",
// ];
let day = today.getDay(1, 2);

if (day === 2) {
	document.write(
		`<h1>"YYYESSS Today is ${today}  :)))) You'r the best):))</h1>`
	);
} else {
	document.write(`<h1>"You are not in TOday)))) </h1>`);
}

//=========================================//

// let today2 = new Date();
// let todayString = today2.toLocaleDateString();

// let daysArray = [
// 	"Понедельник",
// 	"Вторник",
// 	"Среда",
// 	"Четверг",
// 	"Пятница",
// 	"Суббота",
// 	"Воскресенье",
// ];

// function getDay() {
// 	console.log(daysArray - 1);
// }

//=========================================//

// let date = new Date();

// let users = [
// 	{
// 		name: " Deim",
// 		birthday: new Date(2011, 4, 13),
// 	},
// 	{
// 		name: " Naim",
// 		birthday: new Date(2010, 1, 12),
// 	},
// 	{
// 		name: " Karim",
// 		birthday: new Date(2017, 2, 13),
// 	},
// 	{
// 		name: " Elisey",
// 		birthday: new Date(2017, 4, 11),
// 	},
// 	{
// 		name: " Fedor",
// 		birthday: new Date(2017, 24, 12),
// 	},
// ];

// users = users.filter(function (user) {
// 	if (user.birthday.getFullYear() > 2015) return true;
// });

// console.log(users);

//=========================================//
