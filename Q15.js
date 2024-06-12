//Q 15,
//Changing Guest List: You just heard thatlet guestlists: string[] = ["irfan one of your guests can’t make the dinner,
// so you need to send out a new set of invitations.
// You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14.
// Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages,
// one for each person who is still in your l
let guestlist = ["irfan ali", "aijaz ali", "mohsin ali", "zulifqar ali"];
// print the name who cant make dinner
let unableAttend = guestlist.splice(1, 1)[0];
console.log(`${unableAttend} not invited for dinner`);
// push other name
guestlist.push("Azaan ali");
// print a message again
guestlist.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invited `);
});
export {};
