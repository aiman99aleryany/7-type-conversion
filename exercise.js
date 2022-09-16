// # Exercise 7

// * Convert the `hello` variable to a numeric data type and print it in the console.
// * Convert the `age` variable to a boolean data type and print it in the console.
// * Convert the `isGraduated` variable to a string data type and print it in the console.

// Try to explain the output of the `hello` variable casting.
// when trying to convert the String data type to a Number data type, it will always evaluates to NaN (Not a Number), 
// which makes sense, you can't cast strings to numbers, unless the string contains only numbers/floats, 
// in that case it can be casted to a Number data type.

let hello = Number("Ciao"); // number
let age = Boolean(18); // boolean
let isGraduated = String(false); // string

console.log(hello);
console.log(age);
console.log(isGraduated);
