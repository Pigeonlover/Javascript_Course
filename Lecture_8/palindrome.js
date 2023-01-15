
// Ask user for what word they want checked
let input = prompt("Please enter a word:");

// Changing everything to lowercase so uppercase letters won't pose a problem
userWord = input.toLowerCase();

// I created a variable for the status of the word as a boolean so I can check 
// against it
let palindrome = true;

// The while loop is started as long as the word has more than 1 letter. If 
// the first letter is not the same as the last letter, 'palindrome' becomes
// false. Otherwise, it checks the next set of letters.
while (userWord.length > 1 && palindrome === true) {
    if (userWord.charAt(0) != userWord.charAt(userWord.length - 1)) {
        palindrome = false;
    } else {
        userWord = userWord.substring(1, userWord.length - 1);
    }
}

// The user is told whether the word is a palindrome or not
if (palindrome === true) {
    alert(`"${input}" is a palindrome!`);
} else {
    alert(`"${input}" is not a palindrome!`);
}