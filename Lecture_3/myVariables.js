
// Declaring all the variables
const myFirstNumber = 7;
const mySecondNumber = 2;
const myFirstString = "I think, therefore I am... ";
const mySecondString = "Et tu, Brutus?!";
const myBoolean = false;

// Printing the variables; creating variables for the multiplication result and the concatenated 
// string
let mulResult = myFirstNumber * mySecondNumber;
console.log(mulResult);
let joinedStrings = myFirstString + mySecondString;
console.log(joinedStrings);

// Printing multi-line text for the variables using template literals
console.log(`\n The value of the boolean is: ${myBoolean} 
\n The value of the first number is: ${myFirstNumber} 
\n On the other hand, the value of the second number is: ${mySecondNumber} 
\n If you multiply ${myFirstNumber} by ${mySecondNumber}, you will get: ${mulResult} 
\n The first string goes something like: "${myFirstString}" 
\n However, the second string is: "${mySecondString}" 
\n Do you wonder how they look joined up? They surprisingly go well together: "${joinedStrings}"`);

// I added newlines because I thought it would look better