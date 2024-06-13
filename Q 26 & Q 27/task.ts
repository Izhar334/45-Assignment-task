// Task (26)
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an 
// if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points 
// for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 
// points.
// • Write one version of this program that runs the if block and another that runs the 
// else block.

let alien_color: string = "green"; // Change to a non-green color ("yellow" or "red") for else block

if (alien_color === "green") {
  console.log("The player just earned 5 points for shooting the green alien!");
} else {
  console.log(
    "The player just earned 10 points for shooting a non-green alien!"
  );
}
// Test case where alien is not green
alien_color = "yellow";
if (alien_color === "green") {
  console.log("The player just earned 5 points for shooting the green alien!");
} else {
  console.log(
    "The player just earned 10 points for shooting a non-green alien!"
  );
}

// Task (27)
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the 
// appropriate color alien.

let alien_color1: string = "green"; // Change to "yellow" or "red" for different outcomes

if (alien_color1 === "green") {
  console.log("The player just earned 5 points for shooting the green alien!");
} else if (alien_color1 === "yellow") {
  console.log(
    "The player just earned 10 points for shooting the yellow alien!"
  );
} else if (alien_color1 === "red") {
  console.log("The player just earned 15 points for shooting the red alien!");
} else {
  console.log("The alien was an unknown color. No points awarded."); // Optional for handling unexpected colors
}

// Test cases for yellow and red aliens
alien_color1 = "yellow";
if (alien_color1 === "green") {
  console.log("The player just earned 5 points for shooting the green alien!");
} else if (alien_color1 === "yellow") {
  console.log(
    "The player just earned 10 points for shooting the yellow alien!"
  );
} else if (alien_color1 === "red") {
  console.log("The player just earned 15 points for shooting the red alien!");
} else {
  console.log("The alien was an unknown color. No points awarded.");
}

alien_color1 = "red";
if (alien_color1 === "green") {
  console.log("The player just earned 5 points for shooting the green alien!");
} else if (alien_color1 === "yellow") {
  console.log(
    "The player just earned 10 points for shooting the yellow alien!"
  );
} else if (alien_color1 === "red") {
  console.log("The player just earned 15 points for shooting the red alien!");
} else {
  console.log("The alien was an unknown color. No points awarded.");
}
