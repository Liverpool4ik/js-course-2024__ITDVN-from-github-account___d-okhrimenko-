let div = document.getElementById("myDiv");

function changeColor() {
	div.classList.add("myClass");
}

// div.onclick = changeColor;

div.addEventListener("click", changeColor);
// div.removeEventListener("click", changeColor);
