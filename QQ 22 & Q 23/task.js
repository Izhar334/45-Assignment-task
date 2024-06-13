"use strict";
// Task (22)
// Intentional Error: If you haven’t received an array index error in one of your programs
//  yet, try to make one happen. Change an index in one of your programs to produce an index 
//  error. Make sure you correct the error before closing the program.
function updateGuestList1(guests, maxGuests) {
    console.log(`Unfortunately, there's only space for ${maxGuests} guests at the table tonight.`);
    // Loop until only two guests remain (introduce intentional error)
    while (guests.length > maxGuests + 1) {
        // Changed from maxGuests to maxGuests + 1
        const removedGuest = guests.pop();
        // Inform the removed guest
        if (removedGuest) {
            console.log(`Sorry, ${removedGuest.name}, there won't be enough space for you tonight.`);
        }
    }
    return guests;
}
// Example usage
const myguestList = [
    { name: "MianArman Arain" },
    { name: "Mr Yaqoob Malik" },
    { name: "Mr Faizan Malik" },
    { name: "Mr adil Khan" },
];
const finalGuests1 = updateGuestList1(myguestList, 2);
console.log("Here's the final guest list:");
finalGuests1.forEach((guest) => console.log(guest.name));
// Task (23)
// Conditional Tests: Write a series of conditional tests. Print a statement describing 
//   each test and your prediction for the results of each test. Your code should look 
// something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates 
//   to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests
//    evaluate to False
let num3 = 10;
let num4 = 20;
let str3 = "apple";
let str4 = "banana";
let bool = true;
// Type Checks (True)
console.log("Is num1 a number? I predict True.");
console.log(typeof num3 === "number");
console.log("Is str1 a string? I predict True.");
console.log(typeof str3 === "string");
console.log("Is bool a boolean? I predict True.");
console.log(typeof bool === "boolean");
// Comparison Checks (True & False)
console.log("Is num1 equal to num2? I predict False.");
console.log(num3 === num4);
console.log("Is str1 equal to 'apple'? I predict True.");
console.log(str3 === "apple");
console.log("Is str1 strictly equal to str2 (case-sensitive)? I predict False.");
console.log(str3 === str4);
console.log("Is bool true? I predict True.");
console.log(bool === true);
// Falsy Checks (True & False)
console.log("Is num1 considered falsy (0)? I predict False.");
console.log(num3 === 0);
console.log("Is an empty string falsy? I predict True.");
console.log("King", false);
console.log("Is null considered falsy? I predict True.");
console.log(null === false);
