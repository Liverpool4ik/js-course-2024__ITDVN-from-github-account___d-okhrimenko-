let clubs = ["Liverpool", "MU", "Arsenal", "Ninja"];

for (let index = 0; index < clubs.length; index++) {
	const footbalClubs = clubs[index];

	console.log(footbalClubs);
}

for (const club in clubs) {
	console.log(clubs[club]);
}
