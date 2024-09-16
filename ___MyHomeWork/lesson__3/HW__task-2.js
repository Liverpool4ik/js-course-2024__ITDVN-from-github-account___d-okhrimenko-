let day = new Date();
let dayString = day.toLocaleDateString();

document.write(dayString);

if (day !== true) {
	// alert(
	// 	"sorry, today is not a GOOD Day :)) because today is not the 16.th of September"
	// );

	document.write(
		`<h1>"YYYESSS Today is september the 16.th  :)))) You'r the best):))</h1>`
	);
} else {
	document.write(`<h1>"nonono... todays is september the 16.th </h1>`);
}
