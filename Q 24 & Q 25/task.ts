// Task (24)
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
// If you want to try more comparisons, write more tests. Have at least one True and one False 
// result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater 
// than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

let num1: number = 10;
let num2: number = 20;
let str1: string = "apple";
let str2: string = "Apple";
let arr1: string[] = ["apple", "banana", "orange"];
let itemInArray: string = "orange";
let itemNotInArray: string = "grape";
let bool: boolean = true;

// String Tests (True & False)
console.log("Is str1 equal to 'apple'? I predict True.");
console.log(str1 === "apple");

console.log(
  "Is str1 strictly equal to str2 (case-sensitive)? I predict False."
);
console.log(str1 === str2);

console.log("Is str1 equal to lowercase of str2? I predict True.");
console.log(str1 === str2.toLowerCase());

// Numerical Tests (True & False)
console.log("Is num1 equal to num2? I predict False.");
console.log(num1 === num2);

console.log("Is num1 greater than num2? I predict False.");
console.log(num1 > num2);

console.log("Is num1 less than or equal to num2? I predict True.");
console.log(num1 <= num2);

// Logical Operators (True & False)
console.log(
  "Is num1 greater than 5 and less than 15 (True AND False)? I predict False."
);
console.log(num1 > 5 && num1 < 15);

console.log(
  "Is num1 greater than 5 or less than 15 (True OR False)? I predict True."
);
console.log(num1 > 5 || num1 < 15);

// Array Tests (True & False)
console.log("Is 'orange' in the array arr1? I predict True.");
console.log(arr1);

console.log("Is 'grape' in the array arr1? I predict False.");
console.log(arr1);

// Task (25)
// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called
//  alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a
//  message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. 
// (The version that fails will have no output.)

let alien_color: string = "green"; // Change to "yellow" or "red" for different outcomes

if (alien_color === "green") {
  console.log("The player just earned 5 points for shooting the green alien!");
} else {
  console.log("The alien was not green. No points awarded."); // Optional for explaining non-green cases
}
// Test case where alien is not green (no output)
alien_color = "yellow";
if (alien_color === "green") {
  console.log("The player just earned 5 points for shooting the green alien!");
}