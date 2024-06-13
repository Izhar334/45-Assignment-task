// Name Cases: Store a person’s name in a variable, and then print that person’s 
// name in lowercase,uppercase, and titlecase.
var personName = "Izhar Ahmed";
// // Lowercase
var lowercaseName = personName.toLowerCase();
console.log("Lowercase:", lowercaseName);
// // Uppercase
var uppercaseName = personName.toUpperCase();
console.log("Uppercase:", uppercaseName);
// // Title case
var personName1 = "izhar ahmed";
var words = personName.trim().split(" ");
var titlecaseName = "";
for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
    var word = words_1[_i];
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
var author = "Nelson Mandela";
var quote = "The greatest glory in living lies not in never falling, but in rising every time we fall.";
console.log("".concat(author, " once said, \u201C").concat(quote, "\u201D"));
