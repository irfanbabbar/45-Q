// Q 14, 
//Guest List: If you could invite anyone,
// living or deceased, to dinner, who would you invite?
//Make a list that includes at least three people you’d like to invite to dinner.
// Then use your list to print a message to each person,
// inviting them to dinner.
// for each matter use in it
// Define array of guest
let guestlist = ["irfan ali", "aijaz ali", "mohsin ali", "zulifqar ali"];
// Invite each guest for dinner
guestlist.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invited to dinner`);
});
//map() 
// invite guest
let invitation = guestlist.map(guest => `Dear ${guest}, you are cordially invited to dinner`);
invitation.forEach(invitations => {
    console.log(invitations);
});
export {};
