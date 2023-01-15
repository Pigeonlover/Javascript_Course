
// Declaring sides (hardcoded)
const side1 = 10;
const side2 = 20;
const side3 = 10;
const side4 = 20;

// Declaring angles (hardcoded)
const corner1 = 50;
const corner2 = 100;
const corner3 = 50;
const corner4 = 100;


// Now checking the conditionals

// For square, all sides are equal. All angles are equal.
if (side1 === side2 && side1 === side3 && side1 === side4 && 
corner1 === 90 && corner2 === 90 && corner3 === 90 && corner4 === 90) {
    console.log("It's a square!");

// For rectangle, opposite sides are equal. All angles are 90 degrees.
} else if (side1 === side3 && side2 === side4 && corner1 === 90 && 
corner2 === 90 && corner3 === 90 && corner4 === 90) {
    console.log("It's a rectangle!");

// For rhombus, all sides are equal. Opposite angles are equal. Two of 
// the angles are < 90 degrees; the other two are > 90 degrees.
} else if (side1 === side2 && side1 === side3 && side1 === side4 &&
corner1 === corner3 && corner2 === corner4 && (corner1 < 90 && corner2 > 
90 && corner3 < 90 && corner4 > 90 || corner1 > 90 && corner2 < 90 && 
corner3 > 90 && corner4 < 90)) {
    console.log("It's a rhombus!");

// For parallelogram, opposite sides are equal. Opposite angles are also
// equal. Two of the angles are < 90 degrees; the other two are > 90 
// degrees.
} else if (side1 === side3 && side2 === side4 && corner1 === corner3 && 
corner2 === corner4 && (corner1 < 90 && corner2 > 90 && corner3 < 90 && 
corner4 > 90 || corner1 > 90 && corner2 < 90 && corner3 > 90 && corner4 < 
90)) {
    console.log("It's a parallelogram!");

// Anything outside those scopes is accounted for with this message:
} else {
    console.log("The shape is neither a square, rectangle, rhombus or parallelogram!");
}