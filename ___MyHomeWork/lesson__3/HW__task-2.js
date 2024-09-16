let day = new Date();

console.log(day);

dayNorm = day.getDate();

console.log(dayNorm);

if (dayNorm === 16) {
	// alert(
	// 	"sorry, today is not a GOOD Day :)) because today is not the 16.th of September"
	// );

	document.write(
		`<h1>"YYYESSS Today is september the 16.th  :)))) You'r the best):))</h1>`
	);
} else {
	document.write(`<h1>"nonono... todays is not the day you want</h1>`);
}
