
// Ask user for input
const userInput = prompt("Please enter either an uppercase letter, lowercase letter, or a number:");

// Checking the conditionals
if (Number.isInteger(Number(userInput))) {
    alert(`${userInput} is a number!`);
} else if (userInput.toUpperCase() === userInput.toLowerCase()){ 
    alert(`${userInput} is a special character!`);
    // This is because letters cannot be the same when both 'uppercase' and 'lowercase', so only symbols can
} else if (userInput === userInput.toUpperCase()) {
    alert(`${userInput} is an uppercase letter!`);
} else if (userInput === userInput.toLowerCase()) {
    alert(`${userInput} is a lowercase letter!`);
} else {
    alert("Error. Please try again.");
}