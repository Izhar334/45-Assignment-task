// Task (43)
// Unchanged Magicians: Start with your work from Exercise 40. Call the function
//  make_great() with a copy of the array of magicians’ names.
//  Because the original array will be unchanged, return the new array and store
//  it in a with each arseparate array. Call show_magicians()
//  array to show that you have one array of the original names
// and one array with the Great added to each magician’s name

// Define the function make_great() to add "the Great" to each magician's name
function make_great(magicians: string[]): string[] {
    const greatMagicians = magicians.map(name => `the Great ${name}`);
    return greatMagicians;
}

// Define the function show_magicians() to display the arrays of magicians
function show_magicians(original: string[], great: string[]): void {
    console.log("Original Magicians:");
    console.log(original);
    console.log("Magicians with 'the Great' added:");
    console.log(great);
}

// Main function to demonstrate the functionality
function main(): void {
    const magicians: string[] = ["Ahmed Ali", "Farooq Malik", "Sanaullah Khan"];
    
    // Make a copy of the original array
    const originalMagicians: string[] = magicians.slice();
    
    // Call make_great() with the original array
    const greatMagicians: string[] = make_great(magicians.slice());
    
    // Call show_magicians() to display the original and great magician arrays
    show_magicians(originalMagicians, greatMagicians);
}

// Call the main function to run the program
main();

// Task (44)
// Sandwiches: Write a function that accepts a array of items a person wants on a
// sandwich. The function should have one parameter that collects as many items as
//the function call provides, and it should print a summary of the sandwich that is being
//ordered. Call the function three times, using a different number of arguments each time.

function makeSandwich(...items: string[]): void {
    console.log("Making a sandwich with the following items:");
    for (const item of items) {
        console.log("- " + item);
    }
    console.log("Enjoy your sandwich!");
}

// Call the function with different number of arguments
makeSandwich("Turkey", "Lettuce", "Tomato", "Mayonnaise");
makeSandwich("Ham", "Cheese");
makeSandwich("Peanut Butter", "Jelly");
