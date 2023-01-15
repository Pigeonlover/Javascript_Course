
// Variables for the question, and the right answer
let question = `Which of these is NOT a fish?
a) Whale shark
b) Seahorse
c) Narwhal
d) Manatee

Answer either a, b, c or d:`;
const rightAnswer = "c";


// The user is asked to answer. If right, the congratulatory message appears
// and the program exit. If wrong, user is asked if they want to try again.
// If they agree, the question appears again. Otherwise, the progran exits.
do {
    let userAnswer = prompt(question);
    userAnswer = userAnswer.toLowerCase();

    if (userAnswer === rightAnswer) {
        alert("Right answer! Narwhals are marine mammals. Well done!");
        break;
    } else {
        let retry = prompt(`Incorrect! Would you like to try again? 
        Y = Yes
        N = No`);
        retry = retry.toLowerCase();
        if (retry === "n") {
            break;
        }
    }
} while (true);