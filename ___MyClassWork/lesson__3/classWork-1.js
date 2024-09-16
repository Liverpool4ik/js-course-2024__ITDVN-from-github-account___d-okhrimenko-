let value1 = +prompt("Введите первое число");
let value2 = +prompt("Введите второе число");
let value3 = +prompt("Введите третье число");

value1 = Number(value1);
value2 = Number(value2);
value3 = Number(value3);

value1 = parseFloat(value1);
value2 = parseFloat(value2);
value3 = parseFloat(value3);

let valueSumm = value1 + value2 + value3;
let avg = valueSumm / 3;
// document.write(`<h1>${valueSumm}</h1>`);
// console.log(value1 + value2 + value3);
console.log("Average is " + avg.toFixed(2));
