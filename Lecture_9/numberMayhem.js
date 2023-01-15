
// To print backwards, the counter (i) starts from 20, i needs to 
// be >= 0, then i is decremented (--)
let i = 20;

while (i >= 0) {
    console.log(i);
    i--;
}
console.log("")




// Printing even numbers between 0 to 20. Found even numbers by 
//using the modulo operator
let x = 0;

while (x <= 20) {
    if (x % 2 === 0) {
      console.log(x);
       
    }
    x++; 
}
console.log("")




// Printing incrementing asterisks 5 times using .repeat
for (let y = 1; y <= 5; y++) {
    console.log("*".repeat(y));
}