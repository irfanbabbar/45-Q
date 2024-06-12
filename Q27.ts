//Q, 27

// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
// Define varibles
let alienColor1 = "green";
// usrinf if and else if statmints
if (alienColor1 === "green") {
    console.log("you shot down the green alien you have eraned 5 points");
}
else if (alienColor1 === "yellow") {
    console.log("you shot down the yellow alien you have eraned 10 points");
}
else if (alienColor1 === "red") {
    console.log("you shot down the red alien you have eraned 15 points");
}

// version 2 

let alienColor2 = "yellow";

if (alienColor2 === "green") {
    console.log("you shot down the alien you have eraned 5 points");
}
else if (alienColor2 === "yellow") {
    console.log("you shot down the yellow alien you have eraned 10 points");
}
else if (alienColor2 === "red") {
    console.log("you shot down the red alien you have eraned 15 points");
}

// Version 3

let alienColor3 = "red";

if (alienColor3 === "green") {
    console.log("you shot down the green alien you have eraned 5 points");   
}
 else if (alienColor3 === "yellow") {
      console.log("you shot down the yellow alien you have eraned 10 points");
 }
    else if (alienColor3 === "red") {
        console.log("you shot down the red alien you have eraned 15 points");
    }