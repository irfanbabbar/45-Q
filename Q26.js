//Q, 26
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
// Definee Variables
let alienColor = "green";
// frist version of Alien code
if (alienColor === "green") { // block of code
    console.log("player just earned 5 pints for shooting the alien");
}
else {
    console.log("player just earned 10 points");
}
// Second version of the alien code
if (alienColor === "blue") {
    console.log("alien color is blue");
}
else {
    console.log("we are runing else, alien color is red");
}
export {};
