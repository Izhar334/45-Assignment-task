// Task (09)
// Favorite Number: Store your favorite number in a variable. Then, using that variable,
//  create a message that reveals your favorite number. Print that message. 
var favoriteNumber = 42;
var message = "My favorite number is ".concat(favoriteNumber);
console.log(message);
// Task (10)
// Adding Comments: Choose two of the programs you’ve written,and add at least one
//  comment to each. If you don’t have anything specific to write because your programs
//  are too simple at this point, just add your name and the current date at the top of 
//  each program file. Then write one sentence describing what the program does. 
//Program 1: Stripping Names with comments.
// This program demonstrates how to remove leading and trailing whitespace from a string.
// Author: Izhar Ahmed (2024-03-01)
function stripName(name) {
    // Using the trim() method to remove whitespace from both ends of the string
    return name.trim();
}
// Example usage
var rawName = " M.Shafique ";
var strippedName = stripName(rawName);
console.log(strippedName); // Output: "M.Shafique"
//Program 2: Favorite Number with comments.
// This program stores a favorite number and creates a message revealing it.
// Author: Izhar Ahmed (2024-03-01)
var favoriteNumber1 = 46; // Assigning favorite number
// Creating a message that reveals the favorite number
var message1 = "My favorite number is ".concat(favoriteNumber1);
// Displaying the message
console.log(message1); // Output: "My favorite number is 7."
