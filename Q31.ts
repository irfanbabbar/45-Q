// Q, 31

import { clearScreenDown } from "readline";

// No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

let userNames = ["admin", "irfan", "mohsin", "aijaz", "azaan",]

//userNames =[]
if (userNames.length === 0) {
    console.log(" your Array is empty, We need to find some users!");
}else{
    userNames.forEach(oneUser =>{
        if(oneUser === "admin") {
            console.log(`hello ${oneUser}, would you like to see a status report?`)
        }else{
            console.log(`hello ${oneUser}, thank you for logging in again.`)
    
        }
  })
}