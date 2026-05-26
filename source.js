let display = document.querySelector(".displayText");
const numbers = document.querySelectorAll(".number");
const clear = document.querySelector(".clear");
const del = document.querySelector(".del");
const opertors = document.querySelectorAll(".sign");

function add(a, b) {
	return a + b;
}
function substract(a, b) {
	return a - b;
}
function multiply(a, b) {
	return a * b;
}
function devide(a, b) {
	if (b === 0) return "Can't devide by 0";
	return a / b;
}
function power(a, b) {
	return a ** b;
}
function operate(a, b, operator) {
	switch (operator) {
		case "+":
			add(a, b);
			break;
		case "-":
			substract(a, b);
			break;
		case "*":
			multiply(a, b);
			break;
		case "/":
			devide(a, b);
			break;
		case "^":
			power(a, b);
			break;
	}
}
numbers.forEach((number) => {
	number.addEventListener("click", () => {
		display.textContent += number.textContent;
		console.log(number.textContent);
	});
});
