
// Creating the array
let vehicles = ["Maserati", "BMW", "Lamborghini", "Audi", "Jaguar"];


// Printing the same sentence for each car 
for (let i = 0; i < vehicles.length; i++) {

    // If the first letter of the object (index 0) is a vowel, then 
    // print the sentence with 'an'.
    const vowel = "AEIOUaeiou".includes(vehicles[i][0]);

    if (vowel) {
        console.log(`I would love to drive an ${vehicles[i]}.`);
    } else {
        console.log(`I would love to drive a ${vehicles[i]}.`);
    }

}