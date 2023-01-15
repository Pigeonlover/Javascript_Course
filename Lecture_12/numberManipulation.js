
// Create an empty array to store the numbers in. Ask user for random
// numbers input
let array = [];
for (i = 1; i<=10; i++) {
    const userNumber = Number(prompt("Please enter a random number:"))
    if (array.length >= 10) {
        break;
    } else {
        array.push(userNumber);
    }
}

// Print the list of numbers
console.log(array);
console.log("");


// Add all the numbers and print the total
function addNumbers(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}
addNumbers(array);
console.log(addNumbers(array));


// Function that finds the index of the largest number in the list
function largestNumber(array) {
    let currentLargest = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > currentLargest) {
            currentLargest = array[i];
        }
    }
    let largestIndex = array.indexOf(currentLargest);
    return largestIndex;
}
let largestIndex = largestNumber(array);
console.log(`The index of the biggest number in the list is: ${largestIndex}`);



// Function that finds the index of the smallest number in the list
function smallestNumber(array) {
    let currentSmallest = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < currentSmallest) {
            currentSmallest = array[i];
        } 
    }
    let smallestIndex = array.indexOf(currentSmallest);
    return smallestIndex;
}
let smallestIndex = smallestNumber(array);
console.log(`The index of the smallest number in the list is: ${smallestIndex}`);