/*

// ARRAY  with -->> car names
let brandName = [];
brandName[0] = "Lamborgini";
brandName[1] = "Ferrari";
brandName[2] = "Audi";
brandName[3] = "Chevrolet";

// ARRAY  with -->> car prices
let carPrice = [];
carPrice[0] = 15.5;
carPrice[1] = 2000;
carPrice[2] = 50;
carPrice[3] = 124.05;

// ARRAY  with -->> car quantity which been selling
let cars = [];

// C.I.C.L.E. ---> for knowing quantity of cars which been sold
for (let index = 0; index < cars.length; i++) {
	const car = brandName[index];
	const price = carPrice[index];
	cars[index] = +prompt(`Укажите сколько машин марки ${car} по цене ${price}`);
}

// C.I.C.L.E. -->> to count full (total) amount cars which we bought
let totalPrice = 0;
for (let index = 0; index < cars.length; index++) {
	totalPrice += carPrice[index] * cars[index];
}
alert(`Общая сумма вашего заказа ${totalPrice}`);

let isFreeShipping = totalPrice > 1000;
if (isFreeShipping); // because in -- if case -- we used one variable
{
	alert(
		"У вас большая сумма заказа - мы БЕСПЛАТНО доставим ваше купленное авто"
	);
}
*/

let shoppingCart = {};

let shopDataBase = {
	cars: [
		{ brandName: "Lamborgini", carPrice: 15.5 },
		{ brandName: "Ferrari", carPrice: 2000 },
		{ brandName: "Audi", carPrice: 50 },
		{ brandName: "Chevrolet", carPrice: 124.05 },
	],

	add: function (name, price) {
		this.cars.push({ name: name, price: price });
	},
};

let uiController = {};
