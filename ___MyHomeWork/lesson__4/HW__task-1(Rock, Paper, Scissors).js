// rock scissors paper

const ROCK = "КАМЕНЬ";
const SCISSORS = "НОЖНИЦЫ";
const PAPER = "БУМАГА";
const userWins = "УРАА!!! Вы победили";
const compWins = "Вот те на! Вы немного проиграли ((";
const draw = "А вот и Н.И.Ч.Ь.Я. )))";

function yourChoiсe() {
	let result = null;
	let userChoice = prompt("Камень, Ножницы или Бумага? Что вы выбираете?", "");
	if (userChoice) {
		userChoice = userChoice.toUpperCase();
		if (userChoice == ROCK || userChoice == SCISSORS || userChoice == PAPER) {
			result = userChoice;
		} else {
			alert(
				"Какой-то непонятный выбор.... по умолчанию, мы сделали выбор за Вас :-) -->> 'НОЖНИЦЫ'"
			);
			result = SCISSORS;
		}
	} else {
		alert(
			"Какой-то непонятный выбор.... по умолчанию, мы сделали выбор за Вас :-) -->> 'КАМЕНЬ'"
		);
		result = ROCK;
		console.log("Что-то не то ввели )))... попробуйте ещё раз пжлст");
	}

	console.log("-------------------");
	console.log(`Вы выбрали ===>> ${result}`);

	return result;
}

// console.log(yourChoiсe());

function computerChoice() {
	let result = null;
	const computerRandomChoice = Math.random();
	if (computerRandomChoice < 0.34) {
		result = ROCK;
	} else if (computerRandomChoice < 0.67) {
		result = SCISSORS;
	} else result = PAPER;

	console.log("-------------------");
	console.log(`Компьютер выбрал ===>>>  ${result}`);
	return result;
}

// console.log(computerChoice());

function winner(playerChoice, compChoice) {
	if (playerChoice === compChoice) return draw;
	else if (
		(compChoice === ROCK && playerChoice === PAPER) ||
		(compChoice === PAPER && playerChoice === SCISSORS) ||
		(compChoice === SCISSORS && playerChoice === ROCK)
	) {
		return userWins;
	} else return compWins;
}

function game() {
	const playerChoice = yourChoiсe();
	const compChoice = computerChoice();
	console.log("-------------------");
	console.log(winner(playerChoice, compChoice));
}
game();
