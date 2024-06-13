// task (32)
// Checking Usernames: Do the following to create a program that simulates how websites
//  ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the 
// new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used.
//  If it has, print a message that the person will need to enter a new username. If a 
//  username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' 
// should not be accepted.

let current_users: string[] = ["Arman", "Imran", "Kamran", "Umair", "Waqas"];
let new_users: string[] = ["Zubair", "Imran", "Ezaan", "Arman", "Faizan"];

function isUsernameAvailable(username: string): boolean {
  for (let i = 0; i < current_users.length; i++) {
    if (username.toLowerCase() === current_users[i].toLowerCase()) {
      return false; // Username already exists
    }
  }
  return true; // Username is available
}

for (let i = 0; i < new_users.length; i++) {
  let username = new_users[i];
  if (isUsernameAvailable(username)) {
    console.log(`Username '${username}' is available.`);
  } else {
    console.log(
      `Username '${username}' is already taken. Please choose another username.`
    );
  }
}

// Task (33)
//  Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or
//  2nd.
// Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper
//  ordinal ending for each number.
//  Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result 
// should be on a separate line.

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const number of numbers) {
  let suffix: string;
  const lastDigit = number % 10; // Get the last digit of the number

  if (lastDigit === 1 && number !== 11) {
    suffix = "st";
  } else if (lastDigit === 2 && number !== 12) {
    suffix = "nd";
  } else if (lastDigit === 3 && number !== 13) {
    suffix = "rd";
  } else {
    suffix = "th";
  }

  console.log(`${number}${suffix}`);
}
