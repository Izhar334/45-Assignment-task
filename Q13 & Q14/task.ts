// Task (13)
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a 
// car, and make a list that stores several examples. Use your list to print a series of 
// statements about these items, such as “I would like to own a Honda motorcycle.”

let favoriteVehicles: string[] = [
    "Honda CD70",
    "Suzuki 150 Bike",
    "Kia Sportage Car",
  ];
  for (let i = 0; i < favoriteVehicles.length; i++) {
    let statement = `I would like to own a ${favoriteVehicles[i]}.`;
    console.log(statement);
  }
  
// Task (14)
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you 
// invite? Make a list that includes at least three people you’d like to invite to dinner. 
//  Then use your list to print a message to each person, inviting them to dinner.
  
  let guestList: string[] = [
    "Mian Arman Arain",
    "Mr Yaqoob Malik",
    "Mr Faizan Malik",
  ];
  for (let i = 0; i < guestList.length; i++) {
    let invitation = `Dear ${guestList[i]}, I would be honored to have you join me for dinner. 
    It would be a privilege to discuss your contributions to science and your unique 
    perspectives on the world.`;
    console.log(invitation);
  }
  