let display = document.querySelector(".displayText");
const numbers = document.querySelectorAll(".number");
const clearBtn = document.querySelector(".clear");
const delbtn = document.querySelector(".del");
const operators = document.querySelectorAll(".sign");
const equal = document.querySelector(".equal");

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

	number1 = "";
	number2 = "";
	sign = "";
	signCount = 0;
}

function del() {
	const lastChar = display.textContent.slice(-1);
	const operatorsList = ["+", "-", "*", "/", "^"];
	if (operatorsList.includes(lastChar)) {
		signCount = 0;
	}
	if (display.textContent.length <= 0) {
		return;
	} else {
		display.textContent = display.textContent.slice(0, -1);
	}
}

delbtn.addEventListener("click", () => del());
clearBtn.addEventListener("click", () => clear());

let number1 = "";
let number2 = "";
let sign = "";

function operate(a, b, operator) {
	const x = parseFloat(a);
	const y = parseFloat(b);
	switch (operator) {
		case "+":
			return add(x, y);
		case "-":
			return substract(x, y);
		case "*":
			return multiply(x, y);
		case "/":
			return devide(x, y);
		case "^":
			return power(x, y);
		default:
			return NaN;
	}
}

function checkForSign() {
	const lastChar = display.textContent.slice(-1);
	if (lastChar !== "" && lastChar !== "." && isNaN(parseInt(lastChar))) {
		return true;
	} else {
		return false;
	}
}

function isErrorMessage() {
	return display.textContent === "Can't devide by 0";
}

let signCount = 0;

operators.forEach((operator) => {
	operator.addEventListener("click", () => {
		if (isErrorMessage()) {
			return;
		}
		if (display.textContent.length === 0) {
			return;
		}
		const clickedOperator = operator.textContent;

		if (checkForSign()) {
			display.textContent = display.textContent.slice(0, -1) + clickedOperator;
			sign = clickedOperator;
			console.log(sign);
			return;
		}

		if (signCount >= 1) {
			if (number2 !== "") {
				const result = operate(number1, number2, sign);
				if (typeof result === "string") {
					display.textContent = result;
					number1 = "";
					number2 = "";
					sign = "";
					signCount = 0;
					console.log(result);
					return;
				}

				display.textContent = String(result) + clickedOperator;
				number1 = String(result);
				number2 = "";
				sign = clickedOperator;
				signCount = 1;
			} else {
				return;
			}
		} else {
			display.textContent += clickedOperator;
			sign = clickedOperator;
			signCount = 1;
		}
		console.log(sign);
	});
});

numbers.forEach((number) => {
	number.addEventListener("click", () => {
		if (isErrorMessage()) {
			display.textContent = "";
			number1 = "";
			number2 = "";
			sign = "";
			signCount = 0;
		}
		display.textContent += number.textContent;
		if (signCount >= 1) {
			number2 += number.textContent;
		} else {
			number1 += number.textContent;
		}
	});
});

equal.addEventListener("click", () => {
	if (isErrorMessage() || signCount === 0 || number1 === "" || number2 === "") {
		return;
	}
	const result = operate(number1, number2, sign);
	if (typeof result === "string") {
		display.textContent = result;
		number1 = "";
		number2 = "";
		sign = "";
		signCount = 0;
		return;
	}
	display.textContent = String(result);
	number1 = String(result);
	number2 = "";
	sign = "";
	signCount = 0;
});
