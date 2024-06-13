"use strict";
// Task (30)
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine
//  you are writing code that will print a greeting to each user after they log in to a website.
//   Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you 
// like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
let usernames = ["Anas", "admin", "Usman", "umar", "Ezaan"];
for (let i = 0; i < usernames.length; i++) {
    if (usernames[i] === "admin") {
        console.log(`Hello ${usernames[i]}, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${usernames[i]}, thank you for logging in again.`);
    }
}
// Task (31)
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
let usernames1 = []; // Empty array for testing
if (usernames1.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (let i = 0; i < usernames1.length; i++) {
        if (usernames1[i] === "admin") {
            console.log(`Hello ${usernames1[i]}, would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${usernames1[i]}, thank you for logging in again.`);
        }
    }
}
