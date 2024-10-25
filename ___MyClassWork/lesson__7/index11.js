let team1 = createTeam(1, "Dynamo Kiev", 1927);
let team2 = createTeam(2, "Metallist", 1925);
let team3 = createTeam(3, "Liverpool", 1892);

function createTeam(id, name, yearFounded) {
	let team = {};

	team.id = id;
	team.name = name;
	team.yearFounded = yearFounded;
	team.displayInfo = function display() {
		console.log(this.name);
		console.log(this.yearFounded);
		console.log(this.id);
	};
	return team;
}

//========================== CLASS

class Team {
	constructor(id, name, yearFounded) {
		this.id = id;
		this.name = name;
		this.yearFounded = yearFounded;
	}

	displayInfo() {
		console.log(this.name);
		console.log(this.yearFounded);
		console.log(this.id);
	}
}
//======= after constructor & class "TEAM"
let team55 = new Team(55, "LLL", 1555);
let team66 = new Team(66, "KKKKKKKK", 266666);

//=== objects created by -->> fabrical function
team1.displayInfo();
team2.displayInfo();
team3.displayInfo();
//==== objects created by class
team55.displayInfo();
team66.displayInfo();
