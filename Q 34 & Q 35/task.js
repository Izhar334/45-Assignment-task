"use strict";
// Task (34)
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names
//  in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of
//  printing just the name of the pizza. For each pizza you should have one line of output
//   containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much
//  you like pizza. The output should consist of three or more lines about the kinds of
//  pizza you like and then an additional sentence, such as I really love pizza!
// Define an array to store the names of your favorite pizzas
const favoritePizzas = ["Margherita", "Pepperoni", "BBQ Chicken"];
// Use a for loop to print a sentence using the name of each pizza
for (let i = 0; i < favoritePizzas.length; i++) {
    console.log(`I like ${favoritePizzas[i]} pizza.`);
}
// Add an additional line at the end stating how much you like pizza
console.log("I really love pizza!");
// Task (35)
// Animals: Think of at least three different animals that have a common characteristic.
//  Store the names of these animals in a list, and then use a for loop to print out the
//   name of each animal. • Modify your program to print a statement about each animal,
//    such as A dog would make a great pet. • Add a line at the end of your program
//    stating what these animals have in common. You could print a sentence such as Any
// of these animals would make a great pet!
// Step 1: Create a list of animals
let animals = ["dog", "cat", "rabbit"];
// Step 2: Use a for loop to print out the name of each animal
for (let animal of animals) {
    console.log(animal);
}
// Step 3: Modify the program to print a statement about each animal
for (let animal of animals) {
    console.log(`A ${animal} would make a great pet.`);
}
// Step 4: Add a concluding statement about the common characteristic of these animals
console.log("Any of these animals would make a great pet!");
