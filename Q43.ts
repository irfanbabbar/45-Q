//Q, 43
//Unchanged Magicians: Start with your work from Exercise 40.
// Call the function make_great() with a copy of the array of magicians’ 
//names. Because the original array will be unchanged, 
//return the new array and store it in a separate array. 
//Call show_magicians() with each array to show that you have one array of the original names
// and one array with the Great added to each magician’s name.

// difine a function to print each magicians in the array.
function show_magicians(magicians: string[]) {
    magicians.forEach(name => console.log(name));
 }
 //function to make magician creat through .map() it will modify rhe array
 function make_great(magician: string[]) {
   return magician.map(name => `the Great ${name}`);
 }

 //Difine a array of magicians names
 let magician_name = ["harry poter", "irfan", "Azaan"];

 //Makeing a copy of Original Array through .slice() function

 let copy_magician_name = magician_name.slice()

 //Modefy the copyed Array to include "the great" with there names

 let copy_great_magician = make_great(copy_magician_name);

 // show both Array original and copied
 //original Array
 console.log("original Array\n")
 show_magicians(magician_name);
 
 //copied Array
 console.log("copied Array\n")
 show_magicians(copy_great_magician);

