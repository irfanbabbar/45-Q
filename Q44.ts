//Q, 44

//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
//The function should have one parameter that collects as many items as the function call provides, 
//and it should print a summary of the sandwich that is being ordered. 
//Call the function three times, using a different number of arguments each time.

// define a function with a rest parameters that accpit itmes aruguments respresting our sandwich 

function makeSandwich(... items: string[]){
    console.log("\n make a sandwhich with the following itmes \n");

    items.forEach(singleItem => console.log(singleItem));

    console.log("\n now Enjoy Sandwich");
}

// call the function 3 times with 3 different number of arguments

makeSandwich("chicken", "cheese", "Mayo", "Egg");

makeSandwich("Bread", "butter");

makeSandwich("bread", "butter", "Mayo", "Egg", "cheese", "chicken", "lettuce", "tomato");

