
let translator = new Map();
translator.set("Pigeon", "Piccione");
translator.set("Dog", "Cane");
translator.set("Cat", "Gatto");
translator.set("Fish", "Pesce");
translator.set("Chicken", "Gallina");
translator.set("Horse", "Cavallo");
translator.set("Cow", "Mucca");
translator.set("Pig", "Maiale");
translator.set("Peacock", "Pavone");
translator.set("Duck", "Anatra");


// Checking in the console if all the keys and values were added
/*
for (const [key, value] of translator) {
    console.log(key, value);
}
*/


// Print the available English words for translation
let englishList = "Here are the English words available for translation:";
for (let [key, value] of translator) {
  englishList += `\n${key} `;
}
alert(englishList);

// Ask the user to input an English word for translation
let userWord = prompt("Enter the English word you would like to translate: ");

// Check if the word (key) is in the map
if (translator.has(userWord)) {
  // If it is, print the corresponding Italian translation (value) using .get()
  alert(`"${userWord}" is "${translator.get(userWord)}" in Italian!`);
} else {
  // Otherwise, print an error message
  alert(`Sorry, "${userWord}" is not one of the words available for translation. Please try again.`);
}