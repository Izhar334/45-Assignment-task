// Task (18)
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
var travelList = [
    "saudi arabia",
    "dubai",
    "finland",
    "united kingdum",
    "turkey",
];
function printList(list) {
    console.log("Travel List:");
    list.forEach(function (place) { return console.log(place); });
}
printList(travelList);
console.log("\nTravel List (Alphabetical - Copy):");
var sortedCopy = __spreadArray([], travelList, true).sort();
printList(sortedCopy);
console.log("\nOriginal List (Unmodified):");
printList(travelList);
console.log("\nTravel List (Reverse Alphabetical - Copy):");
sortedCopy.sort(function (a, b) { return b.localeCompare(a); });
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
travelList.sort(function (a, b) { return b.localeCompare(a); });
console.log("\nTravel List (Sorted Reverse Alphabetically):");
printList(travelList);
function inviteToDinner(guests) {
    var guestCount = guests.length;
    if (guestCount > 0) {
        console.log("You are inviting ".concat(guestCount, " people to dinner:"));
        guests.forEach(function (guest) { return console.log("- ".concat(guest.name)); });
    }
    else {
        console.log("Looks like you're not inviting anyone to dinner tonight.");
    }
}
var guestList = [
    { name: "Mian arman Arain" },
    { name: "Mr Adil Khan" },
];
inviteToDinner(guestList);
