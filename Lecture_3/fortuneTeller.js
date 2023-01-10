
// Declaring variables for user input
const motherName = prompt("What is your mother's first name?");
const streetName = prompt("What is the name of the street you grew up in?");
const favColour = prompt("What was your favourite colour as a child?");
const userAge = Number(prompt("What is your age now?"));
const userNumber = Number(prompt("Chose a random number between 1 and 10:"));


/* Used these to check the values were correctly taken as integers:
console.log(typeof userAge);
console.log(typeof userNumber);
*/


// Variables for the calculations' and concatenations' results
const friendName = motherName + " " + streetName;
const whenMarried = Math.round(userAge / userNumber);
const numberOfChildren = userAge % userNumber;
const hairChange = userAge - userNumber;


// Printing the text
console.log(`Your best friend will be called ${friendName}, and you will meet them in ${userNumber} years.
In ${whenMarried} years, you will get married, and eventually you will have ${numberOfChildren} children.
Oh! Randomly, my crystal ball is telling me you will dye your hair ${favColour} in ${hairChange} years...`);