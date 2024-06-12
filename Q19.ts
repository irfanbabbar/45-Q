//Q 19,
//Dinner Guests: Working with one of the programs from Exercises 14 through 18,
// print a message indicating the number of people you are inviting 


let guestlist: string[] = ["irfan ali", "mohsin ali", "zulifqar ali", "Azaan ali"];
// print message
console.log("unfortunately! the new dinner table wont arrive so we can invite only 2 guest");

guestlist.unshift("alice", "bob");
// print message updated list

console.log("updated guest list:", guestlist);
//remove guest from the list

while (guestlist.length > 2) {
    let removedGuest = guestlist.pop();
    if (removedGuest !== undefined) {
        console.log(`Sorry, ${removedGuest}, we cant invite you.`);
    }
}
// print message to each of the tow people still in the list. litting them will be removed from the list.

guestlist.forEach(guest =>{
    console.log(`Dear ${guest}, you both are invited for the dinner`);
})
// remove 2 names from the list
guestlist.splice(0, guestlist.length);

// print updated empty list

console.log("updated guest list:", guestlist);
