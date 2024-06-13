
// Name Cases: Store a person’s name in a variable, and then print that person’s 
// name in lowercase,uppercase, and titlecase.

let personName: string = "Izhar Ahmed";

// // Lowercase
let lowercaseName: string = personName.toLowerCase();
console.log("Lowercase:", lowercaseName);

// // Uppercase
let uppercaseName: string = personName.toUpperCase();
console.log("Uppercase:", uppercaseName);

// // Title case
let personName1 = "izhar ahmed";
let words = personName.trim().split(" ");
let titlecaseName = "";

for (let word of words) {
  titlecaseName += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() + " ";
}

// Remove the trailing space
titlecaseName = titlecaseName.trim();

console.log("Title case:", titlecaseName);

// Task (04)
// Famous Quote: Find a quote from a famous person you admire. Print the quote and the
//  name of its author.Your output should look something like the following,
//  including the quotation marks:Albert Einstein once said,
//  “A person who never made a mistake never tried anything new.”

const author: string = "Nelson Mandela";
const quote: string = "The greatest glory in living lies not in never falling, but in rising every time we fall.";

console.log(`${author} once said, “${quote}”`);

