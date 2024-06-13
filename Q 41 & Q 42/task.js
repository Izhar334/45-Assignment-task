// task (41)
// Magicians: Make a array of magician’s names. Pass the array to a function
//  called show_magicians(), which prints the name of each magician in the array.
// Define an array of magician names
var magicians = ["Ahmed Ali", "Farooq Malik", "Sanaullah Khan", "Zaheer Abbas"];
// Function to show magician names
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
// Call the function to show magician names
show_magicians(magicians);
// Define the Magician array
var magicians1 = [
    { name: "Ahmed Ali" },
    { name: "Farooq Malik" },
    { name: "Sanaullah Khan" }
];
// Function to make magicians great
function makeGreat(magicians) {
    magicians.forEach(function (magician) {
        magician.name = "the Great ".concat(magician.name);
    });
}
// Function to show magicians
function showMagicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician.name);
    });
}
// Call makeGreat to modify the magicians array
makeGreat(magicians1);
// Call showMagicians to verify the modification
showMagicians(magicians1);
