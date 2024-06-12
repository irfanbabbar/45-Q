//Q 17,
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
// and you have space for only two guests.
//• Start with your program from Exercise 16.
// Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list.
// Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
let guestlist = ["irfan ali", "mohsin ali", "zulifqar ali", "Azaan ali"];
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
guestlist.forEach(guest => {
    console.log(`Dear ${guest}, you both are invited for the dinner`);
});
// remove 2 names from the list
guestlist.splice(0, guestlist.length);
// print updated empty list
console.log("updated guest list:", guestlist);
export {};
