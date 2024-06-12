// Q,24
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
//If you want to try more comparisons, write more tests.
// Have at least one True and one False result for each of the following:

//• Tests for equality and inequality with strings

//• Tests using the lower case function

//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

//• Tests using "and" and "or" operators

//• Test whether an item is in a array

//• Test whether an item is not in a array


//Tests for equality and inequality with strings
const string: string = "hellow";
const string1: string = "world";

console.log(string === string1);// false
console.log(string !== string1);// true

// Tests using the lower case function

const toUpperCase: string = "HELLO";
const toLowerCase: string = "hello";

console.log(toUpperCase.toLowerCase() === toLowerCase);// true

// Numerical tests involving equality and inequality,
// greater than and less than, greater than or equal to,
// and less than or equal to.

const num: number = 10;
const num1: number = 5;

console.log(num === num1);// false
console.log(num !== num1);// ture

console.log(num > num1);// true
console.log(num < num1);//false

console.log(num >= num1);// true
console.log(num <= num1);// true

// Tests using "and" and "Or" operators

const x: number = 10;
const y: number = 20;
const z: number = 30;

console.log(x < y && y < z);//false

console.log(x > y || y < z);//true

// Test whether an item is in a array

const array: number[] = [1, 2, 3, 4, 5,];
const itemtofind: number = 3;

console.log(array.indexOf(itemtofind) !== -1);// true

// Test whether an item is not in a array

console.log(array.indexOf(itemtofind) === -1);// false

