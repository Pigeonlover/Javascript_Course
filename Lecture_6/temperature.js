
// Asking the user for the initial inputs

let convertFrom = prompt(`In which metric is the temperature you are converting from? Please write:
C for Celsius;
K for Kelvin;
F for Fahrenheit.`);

const userInput = Number(prompt("What is the number?"));

let convertTo = prompt(`In which metric would you like to convert it to? Please write:
C for Celsius;
K for Kelvin;
F for Fahrenheit.`);


// In case user doesn't enter capital letters, storing them all to lowercase
// takes care of this problem
convertFrom = convertFrom.toLowerCase();
convertTo = convertTo.toLowerCase();


// Checking the conditionals

if (convertFrom === "c" && convertTo === "k") {
    const answer = userInput + 273.15;
    alert(`${userInput}\u00B0C is ${answer.toFixed(2)}K!`);
} else if (convertFrom === "c" && convertTo === "f") {
    const answer = userInput * (9/5) + 32;
    alert(`${userInput}\u00B0C is ${answer.toFixed(2)}\u00B0F!`);
} else if (convertFrom === "k" && convertTo === "c") {
    const answer = userInput - 273.15;
    alert(`${userInput}K is ${answer.toFixed(2)}\u00B0C!`);
} else if (convertFrom === "k" && convertTo === "f") {
    const answer = userInput * (9/5) - 459.67;
    alert(`${userInput}K is ${answer.toFixed(2)}\u00B0F!`);
} else if (convertFrom === "f" && convertTo === "c") {
    const answer = (userInput - 32) * (5/9);
    alert(`${userInput}\u00B0F is ${answer.toFixed(2)}\u00B0C!`);
} else if (convertFrom === "f" && convertTo === "k") {
    const answer = (userInput + 459.67) * (5/9);
    alert(`${userInput}\u00B0F is ${answer.toFixed(2)}K!`);
} else {
    alert("Error: please refresh and try again.")
}