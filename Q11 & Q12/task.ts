// Task (11)
// Names: Store the names of a few of your friends in a array called names. Print each 
// person’s name by accessing each element in the list, one at a time

let names: string[] = [
  "Mian Arman Arain",
  "Mr Yaqoob Malik",
  "Mr Faizan Malik",
  "Mr Irfan Pathan",
];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// Task (12)
// Greetings: Start with the array you used in Exercise 11, but instead of just printing 
// each person’s name, print a message to them. The text of each message should be the same, 
// but each message should be personalized with the person’s name.

let names1: string[] = [
  "Mian Arman Arain",
  "Mr Yaqoob Malik",
  "Mr Faizan Malik",
  "Mr Irfan Pathan",
];
for (let i = 0; i < names.length; i++) {
  let greeting = `Hello, ${names1[i]}! How are you doing today?`;
  console.log(greeting);
}
