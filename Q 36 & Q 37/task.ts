// Task (36)
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of 
// a message that should be printed on the shirt. The function should print a sentence
//  summarizing the size of the shirt and the message printed on it. Call the function.

function make_shirt(size: string, message: string): void {
    console.log(`The size of the shirt is ${size} and the message is ${message}`);
}

make_shirt("XL", "Call the function");


// Task (37)
// Large Shirts: Modify the make_shirt() function so that shirts are large by default
//  with a message that reads I love TypeScript. Make a large shirt and a medium shirt
// with the default message, and a shirt of any size with a different message

function make_shirt1(size: string = "large", message: string = "I love TypeScript"): void {
    console.log(`Size: ${size}, Message: ${message}`);
}

// Create a large shirt with the default message
make_shirt1(); // Output: Size: large, Message: I love TypeScript

// Create a medium shirt with the default message
make_shirt1("medium"); // Output: Size: medium, Message: I love TypeScript

// Create a shirt of any size with a different message
make_shirt1("small", "Governor Sindh Initiative is Awsome"); // Output: Size: small, Message: JavaScript is awesome!
