//Q, 41
//Magicians: Make a array of magician’s names.
//Pass the array to a function called show_magicians(),
// which prints the name of each magician in the array.
// difine a function to print each magicians in the array.
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
//define in a array containing magicians name
let magician_name = ["harry poter", "irfan", "Azaan"];
// call the function to print each magician name
show_magicians(magician_name);
export {};
