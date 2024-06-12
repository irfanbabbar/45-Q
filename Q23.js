// Q,23
//Conditional Tests: Write a series of conditional tests.
// Print a statement describing each test and your prediction for the results of each test.
// Your code should look something like this:
//let car = 'subaru';
//console.log("Is car == 'subaru'? I predict True.")
//console.log(car == 'subaru')
//• Look closely at your results, and make sure you understand why each line evaluates to True or False.
//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
// test no, 1
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
// test no, 2
console.log("Is car == 'toyota'? I predict false.");
console.log(car == 'toyota');
//test no, 3
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');
//test no, 4
console.log("Is car == 'subaru'? I predict false.");
console.log(car == 'subaru');
//test no, 5
console.log("Is car.length > 0? I predict True.");
console.log(car.length > 0);
// test no, 6
console.log("Is car.length < 5? I predict false.");
console.log(car.length < 5);
// test no, 7
console.log("Is car.touppercase() === 'SUBARU'? I predict True.");
console.log(car.toUpperCase() === 'SUBARU');
// test no, 8
console.log("Is car.touppercase() === 'subaru'? I predict True.");
console.log(car.toUpperCase() === 'subaru');
// test no, 9
console.log("Is car.tolowercase() === 'subaru'? I predict True.");
console.log(car.toLowerCase() === 'subaru');
// test no, 10
console.log("Is car.includes('u') 'subaru'? I predict True.");
console.log(car.includes('u'));
export {};
