// Q 16,
//More Guests: You just found a bigger dinner table,
// so now more space is available. Think of three more guests to invite to dinner.

//• Start with your program from Exercise 15.
// Add a print statement to the end of your program informing people that you found a bigger dinner table.

//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.

let guestlist: string[] = ["irfan ali", "mohsin ali", "zulifqar ali", "Azaan ali"];

console.log("Great news! we found a bigger table");

// unshift member in guest list
guestlist.unshift("mariyam");

//splice in guest list

guestlist.splice(Math.floor(guestlist.length/2),0, "mahaam");

guestlist.push("erum")

// for each guest list

guestlist.forEach(guest => {
    console.log(`Dear ${guest}, you All are cordially invited to dinner`);
});