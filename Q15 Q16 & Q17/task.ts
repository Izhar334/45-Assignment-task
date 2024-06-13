// Task (15)
// Changing Guest List: You just heard that one of your guests can’t make the dinner,
//  so you need to send out a new set of invitations. You’ll have to think of someone else
// to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your
//  program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name
//  of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your
//  list.

let guestList: string[] = [
    "Mian Arman Arain",
    "Mr Yaqoob Malik",
    "Mr Faizan Malik",
  ];
  let guestWhoCantMakeIt: string = "Mr Faizan Malik";
  let indexOfGuestWhoCantMakeIt: number = guestList.indexOf(guestWhoCantMakeIt);
  if (indexOfGuestWhoCantMakeIt !== -1) {
    guestList.splice(indexOfGuestWhoCantMakeIt, 1);
    console.log(
      `${guestWhoCantMakeIt} unfortunately can't make it to the dinner.`
    );
    let newGuest: string = "Ammaz Ahmed";
    guestList.push(newGuest);
    console.log(`I have invited ${newGuest} to join the dinner instead.`);
  } else {
    console.log(`${guestWhoCantMakeIt} is not on the guest list.`);
  }
  for (let i = 0; i < guestList.length; i++) {
    let invitation = `Dear ${guestList[i]}, I would be honored to have you join me for dinner. It would be a privilege to discuss your contributions to science and your unique perspectives on the world.`;
    console.log(invitation);
  }
  
  // Task (16)
  // More Guests: You just found a bigger dinner table, so now more space is available.
  //  Think of three more guests to invite to dinner.
  // • Start with your program from Exercise 15. Add a print statement to the end of
  //  your program informing people that you found a bigger dinner table.
  // • Add one new guest to the beginning of your array.
  // • Add one new guest to the middle of your array. • Use append() to add one new
  //  guest to the end of your list. • Print a new set of invitation messages, one for 
  //  each person in your list.
  
  let guestList1: string[] = ["Mr Adil Khan", "Mr Rehaan Khan"];
  let guestWhoCantMakeIt1: string = "Mr Faizan Malik";
  // Find the index of the guest who can't make it (using indexOf)
  let indexOfGuestWhoCantMakeIt1: number =
    guestList1.indexOf(guestWhoCantMakeIt1);
  // Check if the guest is found in the list (index !== -1)
  if (indexOfGuestWhoCantMakeIt1 !== -1) {
    guestList1.splice(indexOfGuestWhoCantMakeIt1, 1);
    console.log(
      `${guestWhoCantMakeIt1} unfortunately can't make it to the dinner.`
    );
  } else {
    console.log(`${guestWhoCantMakeIt1} is not on the guest list.`);
  }
  let newGuests: string[] = [
    "Mr Adil Khan",
    "Mian Arman Malik",
    "Usama Khan",
    "Mr Yaqoob Malik",
    "Mr Rehaan Khan",
  ];
  guestList1.unshift(newGuests[0]); // Add to the beginning using unshift
  guestList1.splice(Math.floor(guestList1.length / 2), 0, newGuests[1]); // Add to the middle using splice
  guestList1.push(newGuests[2]); // Add to the end using push
  console.log("I found a bigger dinner table, so I can invite more guests!");
  for (let i = 0; i < guestList1.length; i++) {
    let invitation1 = `Dear ${guestList1[i]}, I would be honored to have you join me for dinner. It would be a privilege to discuss your contributions to science and your unique perspectives on the world.`;
    console.log(invitation1);
  }
  
// Task (17)
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// Interface for guest information
interface Guest {
    name: string;
  }
  function updateGuestList(guests: Guest[], maxGuests: number): Guest[] {
    console.log(
      `Unfortunately, there's only space for ${maxGuests} guests at the table tonight.`
    );
    while (guests.length > maxGuests) {
      const removedGuest = guests.pop();
      if (removedGuest) {
        console.log(
          `Sorry, ${removedGuest.name}, there won't be enough space for you tonight.`
        );
      }
    }
    return guests;
  }
  // Example usage
  const guestList3: Guest[] = [
    { name: "Mian Arman Arain" },
    { name: "Mr Adil Khan" },
    { name: "Mr Yaqoob Malik" },
    { name: "Usama Amjad" },
  ];
  const finalGuests = updateGuestList(guestList3, 2);
  console.log("Here's the final guest list:");
  finalGuests.forEach((guest) => console.log(guest.name));
  