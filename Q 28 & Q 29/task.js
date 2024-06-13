"use strict";
// Task (28)
// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a
// value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person
//  is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person
// is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person
// is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person
//  is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
let age = 30; // Change the value to test different stages
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
// Task (29)
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of
// independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your
//  array. If the fruit is in your array, the if block should print a statement, such as You
//  really like bananas!
let favorite_fruits = ["apple", "banana", "orange"];
// Independent if statements for each fruit
for (let i = 0; i < favorite_fruits.length; i++) {
    if (favorite_fruits[i] === "apple") {
        console.log("You really like apples!");
    }
    else if (favorite_fruits[i] === "banana") {
        console.log("You really like bananas!");
    }
    else if (favorite_fruits[i] === "orange") {
        console.log("You really like oranges!");
    }
}
// Testing Non-existent Fruits (no output)
if (favorite_fruits[0] === "mango") {
    // Check first element for a non-existent fruit
    console.log("You really like mangoes! (This is not in your favorite_fruits array)");
}
if (favorite_fruits[favorite_fruits.length - 1] === "grape") {
    // Check last element for another non-existent fruit
    console.log("You really like grapes! (This is not in your favorite_fruits array)");
}
