
// I created two variables: one to store the sum of all the numbers, the 
// other to store how many numbers the user enters 
let sum = 0;
let numbers = 0;

// The user is asked to enter a number. It then checks straightaway if that
// number is a -1 (exits), or not (continues to ask for number). 
while (true) {
    const userNumber = Number(prompt("Please enter a number:"));

    if (userNumber === -1) {
        break;
    }

    sum += userNumber;
    numbers++;
}

// Variable for the average, and it's calculated
const average = sum / numbers;

// The average is shown to the user (to two decimal places)
alert(`The average is ${average.toFixed(2)}.`);