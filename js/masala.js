// -------------------------------MASALA 1 -------------------------------------



let word = "arrrrra";
let letters = {};
let splitWord = word.split("");

function findNumLetter() {
	for (let word of splitWord) {
		if (!letters[word]) {
			letters[word] = 1;
		} else {
			letters[word]++;
		}
	}
}
findNumLetter();
console.log(letters);

/*================================= MASALA 2 ==============================*/
let num = "765";
const checkPalindrome = () => {
	let reversNum = num.toString().split("").reverse().join("");
	let strValue = num.toString();

	if (strValue === reversNum) {
		console.log("Palindrome SON");
	} else {
		console.log("Palindrome son emas");
	}
};
checkPalindrome();

/*================================ Kabisa yili ============================= */
function findYear(yil) {
	return yil % 100 === 0 ? yil % 400 === 0 : yil % 4 === 0;
}
console.log(findYear(2020));

/*================================== Manfiy son ============================== */
const numbers = [32, -12, -32, 33, 54];
function findMinusNumber() {
	let EachNum = [];
	numbers.forEach((number) => {
		if (number < 0) {
			EachNum.push(number);
		}
	});
	console.log(EachNum);
}
findMinusNumber();