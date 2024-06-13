// Task (18)

// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the
//  original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its
//  original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that
//  its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the
//  list to show that its order has changed.

const travelList: string[] = [
    "saudi arabia",
    "dubai",
    "finland",
    "united kingdum",
    "turkey",
  ];
  function printList(list: string[]): void {
    console.log("Travel List:");
    list.forEach((place) => console.log(place));
  }
  printList(travelList);
  console.log("\nTravel List (Alphabetical - Copy):");
  const sortedCopy = [...travelList].sort();
  printList(sortedCopy);
  console.log("\nOriginal List (Unmodified):");
  printList(travelList);
  console.log("\nTravel List (Reverse Alphabetical - Copy):");
  sortedCopy.sort((a, b) => b.localeCompare(a));
  printList(sortedCopy);
  console.log("\nOriginal List (Unmodified):");
  printList(travelList);
  travelList.reverse();
  console.log("\nTravel List (Reversed):");
  printList(travelList);
  travelList.reverse();
  console.log("\nTravel List (Original Order Restored):");
  printList(travelList);
  travelList.sort();
  console.log("\nTravel List (Sorted Alphabetically):");
  printList(travelList);
  travelList.sort((a, b) => b.localeCompare(a));
  console.log("\nTravel List (Sorted Reverse Alphabetically):");
  printList(travelList);
  
  // Task (19)
  // Dinner Guests: Working with one of the programs from Exercises 14 through 18,
  //  print a message indicating the number of people you are inviting to dinner.
  
  interface Guest {
    name: string;
  }
  function inviteToDinner(guests: Guest[]): void {
    const guestCount = guests.length;
    if (guestCount > 0) {
      console.log(`You are inviting ${guestCount} people to dinner:`);
      guests.forEach((guest) => console.log(`- ${guest.name}`));
    } else {
      console.log("Looks like you're not inviting anyone to dinner tonight.");
    }
  }
  const guestList: Guest[] = [
    { name: "Mian arman Arain" },
    { name: "Mr Adil Khan" },
  ];
  inviteToDinner(guestList);
  