//Q, 42
//Great Magicians: Start with a copy of your program from Exercise 39. 
//Write a function called make_great()
// that modifies the array of magicians by adding the phrase the Great to each magician’s name.
// Call show_magicians() to see that the list has actually been modified.



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


 // call the function to print each magician name

let great_magician = make_great(magician_name);

show_magicians(great_magician)

