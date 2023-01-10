
// Get user input of their water usage in litres
const usageInLitres = Number(prompt("How many litres of water have you used?"));

// Convert litres to kilolitres
let kilolitres = usageInLitres / 1000;

// Initialise bill variable at R0
let bill = 0;

// Calculate bill by water usage brackets
if (kilolitres >= 0 && kilolitres <= 6) {
    bill += kilolitres * 15.73;
    alert(`You will have to pay R${bill.toFixed(2)}.`);
    

} else if (kilolitres > 6 && kilolitres <= 10.5) {
    kilolitres -= 6;
    bill += kilolitres * 22.38;
    bill += 6 * 15.73;
    alert(`You will have to pay R${bill.toFixed(2)}.`);

} else if (kilolitres > 10.5 && kilolitres <= 35) {
    kilolitres -= 11.5;
    bill += kilolitres * 31.77;
    bill += 6 * 15.73;
    bill += 5.5 * 22.38;
    alert(`You will have to pay R${bill.toFixed(2)}.`);

} else if (kilolitres > 35) {
    kilolitres -= 36;
    bill += kilolitres * 69.76;
    bill += 6 * 15.73;
    bill += 4.5 * 22.38;
    bill += 26.5 * 31.77;
    alert(`You will have to pay R${bill.toFixed(2)}.`);

} else {
    alert("Error. Please refresh the page and try again.");
}