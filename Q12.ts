//Q 12,
// Greetings: Start with the array you used in Exercise 11,
// but instead of just printing each person’s name,
// print a message to them. The text of each message should be the same,
// but each message should be personalized with the person’s name.

let names: string[] = ["irfan", "Aijaz", "mohsin", "zulifqar"];

for (let i = 0; i < names.length; i++) {
    console.log(`hello, ${names[i]}! how are you today?`);
}

// for each
names.forEach(friends => {
    console.log(`hi, ${friends}! how are you today?`)
});

//for loop
for (const friendName of names) {
    console.log(`Dear, ${friendName}! how are you`);
}