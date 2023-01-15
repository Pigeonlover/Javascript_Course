
// Creating the array
let vehicles = ["Maserati", "BMW", "Lamborghini", "Audi", "Jaguar"];

// Declaring which car brand is the favourite
const favoriteCar = "BMW";

// Printing the same sentence for each car 
for (let i = 0; i < vehicles.length; i++) {

    // If the current vehicle being iterated is equal to favoriteCar
    // then print it as such
    if (vehicles[i] === favoriteCar) {
        console.log(`The ${vehicles[i]} is my favourite car.`);
    } else {
        console.log(`The ${vehicles[i]} is not my favourite car.`);
    }

}