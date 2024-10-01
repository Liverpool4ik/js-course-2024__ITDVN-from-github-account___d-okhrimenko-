let word = prompt("Введите слово на проверку");

let wordLen = word.length; // 5

let isPalindrome;

for (let i = 0; i < wordLen / 2; i++) {
	if (word[i] != word[wordLen - 1 - i]) {
		isPalindrome = false;
		break;
	}
	isPalindrome = true;
}

if (isPalindrome) {
	console.log("Введённое слово -->> " + word + " - является ПАЛИНДРОМОМ");
} else {
	console.log("Введённое слово -->> " + word + " - НЕЕЕЕЕЕ..... ПАЛИНДРОМ");
}
