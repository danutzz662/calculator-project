let display = document.querySelector(".displayText");
const numbers = document.querySelectorAll(".number");
const clearBtn = document.querySelector(".clear");
const delbtn = document.querySelector(".del");
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

function clear() {
	display.textContent = "";
	console.log("Display cleared");
}

function del() {
	if (display.textContent.length <= 0) {
		return;
	} else {
		console.log(display.textContent.slice(0, -1));
		display.textContent = display.textContent.slice(0, -1);
	}
}

delbtn.addEventListener("click", () => del());
clearBtn.addEventListener("click", () => clear());

let number1 = "";
let number2 = "";
let operator = "";

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
