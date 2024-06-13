// task (41)
// Magicians: Make a array of magician’s names. Pass the array to a function
//  called show_magicians(), which prints the name of each magician in the array.

// Define an array of magician names
const magicians: string[] = ["Ahmed Ali", "Farooq Malik", "Sanaullah Khan", "Zaheer Abbas"];

// Function to show magician names
function show_magicians(magicians: string[]): void {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}

// Call the function to show magician names
show_magicians(magicians);

// task (42)
// Great Magicians: Start with a copy of your program from Exercise 39. Write a 
// function called make_great() that modifies the array of magicians by adding the 
// phrase the Great to each magician’s name. Call show_magicians() to see that the list 
// has actually been modified.

// Define the Magician interface
interface Magician {
    name: string;
}

// Define the Magician array
let magicians1: Magician[] = [
    { name: "Ahmed Ali" },
    { name: "Farooq Malik" },
    { name: "Sanaullah Khan" }
];

// Function to make magicians great
function makeGreat(magicians: Magician[]): void {
    magicians.forEach(magician => {
        magician.name = `the Great ${magician.name}`;
    });
}

// Function to show magicians
function showMagicians(magicians: Magician[]): void {
    magicians.forEach(magician => {
        console.log(magician.name);
    });
}

// Call makeGreat to modify the magicians array
makeGreat(magicians1);

// Call showMagicians to verify the modification
showMagicians(magicians1);

