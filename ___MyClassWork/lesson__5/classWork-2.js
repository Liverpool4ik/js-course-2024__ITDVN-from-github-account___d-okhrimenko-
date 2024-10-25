document.querySelector("#btnToCelcius").onclick = function () {
	let tempToFarht = +document.querySelector("#temp").value;
	let tempToCelc = (5 / 9) * (tempToFarht - 32);
	showResult(tempToCelc);
};
document.querySelector("#btnToFarenheit").onclick = function () {
	let tempToCelc = +document.querySelector("#temp").value;
	let tempToFarht = (9 / 5) * (tempToCelc + 32);
	showResult(tempToFarht);
};

function showResult(result) {
	let output = document.querySelector("#output");
	output.innerHTML = result;
}
