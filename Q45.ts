//Q, 45

//Cars: Write a function that stores information about a car in a Object. 
//The function should always receive a manufacturer and a model name. 
//It should then accept an arbitrary number of keyword arguments. 
//Call the function with the required information and two other name-value pairs, 
//such as a color or an optional feature.
// Print the Object that’s returned to make sure all the information was stored correctly.



// Difine a function to create a car object with optional options

function create_car (manufacturer: string, model: string, ...options) {
    //initailize a car object with manufacturer and model
    let car = {
         manufacturer: manufacturer,
         model: model,
};
// add additional options to the car object

options.forEach(options => {
    let [key, value] = options.split(":");
    car[key.trim()] = value.trim();
});

return car;
}

// Call the function to create a car object

let my_car = create_car("toyota", "corolla", "color: black", "sunroof: true");

console.log(my_car);