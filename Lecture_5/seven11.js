
// Ask user to input a number of their choice
const userNumber = Number(prompt("Please enter a number:"));

// Now we will check the conditionals
// We use modulo operator (if the remainder is 0, then it is divisble by that number)


// First, check if the number is divisible by both 7 and 11, otherwise go on the next check
if ((userNumber % 7) === 0 && (userNumber % 11) === 0) {
    alert(`${userNumber} can be divided by both 7 and 11!`);
}
// Here we check if it's divisible by 7
else if (userNumber % 7 === 0) {
    alert(`${userNumber} can be divided by 7!`);
// Then we check if it's divisible by 11
} else if (userNumber % 11 === 0) {
    alert(`${userNumber} can be divided by 11!`);
// Lastly, anything else is assumed that it's not divisible by either 7 or 11
} else {
    alert(`${userNumber} cannot be divided by either 7 or 11! Quite sad :(`);
}