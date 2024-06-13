// Task (20)
// Think of something you could store in a array. For example, you could make a list of 
// mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program 
// that creates a list containing these items.
// Array of mountains
var mountains = ["Mount Everest", "K2", "Kilimanjaro"];
var rivers = ["Indus 2900", "Jehlum 725"];
// Array of countries
var countries = ["Pakistan", "Dubai", "Qater"];
// Array of cities
var cities = ["Karachi", "Faisal Abad", "Lahore"];
// Array of languages
var languages = ["English", "Urdu", "Panjabi"];
console.log("Mountains:");
printList(mountains);
console.log("\nRivers:");
printList(rivers);
console.log("\nCountries:");
printList(countries);
console.log("\nCities:");
printList(cities);
console.log("\nLanguages:");
printList(languages);
// Function to print the array elements (for reusability)
function printList(list) {
    list.forEach(function (item) { return console.log(item); });
}
var book = {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    yearPublished: 1954,
};
var movie = {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    releaseYear: 1994,
    genre: "Drama",
};
var person = {
    name: "Izhar Ahmed",
    age: 37,
    occupation: "Business Man",
};
// Print object details
function printObject(obj) {
    for (var key in obj) {
        console.log("".concat(key, ": ").concat(obj[key]));
    }
}
console.log("Book Details:");
printObject(book);
console.log("\nMovie Details:");
printObject(movie);
console.log("\nPerson Details:");
printObject(person);
