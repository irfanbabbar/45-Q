//Q 3,
//Name Cases: Store a person’s name in a variable,
// and then print that person’s name in lowercase,
// uppercase, and titlecase.


const personName1: string = "irfan ali";
// lowercase
console.log(personName1.toLowerCase());

//uppercase
console.log(personName1.toUpperCase());

//titlecase
let firstLetter: string = personName1.charAt(0).toUpperCase();
let restletters: string = personName1.slice(1).toLowerCase();

let titlecase = firstLetter + restletters;

console.log(titlecase);
