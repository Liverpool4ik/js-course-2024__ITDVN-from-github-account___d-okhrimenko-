let team1 = {
	name: "Liverpool",
	yearFounded: 1899,
	displayInfo: display,
};
let team2 = {
	name: "Dynamo Kiev",
	yearFounded: 1927,
	displayInfo: display,
};

let team3 = {
	name: "Metallist",
	yearFounded: 1925,
	displayInfo: display,
};

let team4 = {};
team4.name = "Manchester";
team4.yearFounded = 1878;
team4.displayInfo = display;

function display() {
	console.log(this.name);
	console.log(this.yearFounded);
}

team1.displayInfo();
team2.displayInfo();
team3.displayInfo();
team4.displayInfo();
