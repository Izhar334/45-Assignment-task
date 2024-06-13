// Task (20)
// Think of something you could store in a array. For example, you could make a list of 
// mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program 
// that creates a list containing these items.

// Array of mountains
const mountains: string[] = ["Mount Everest", "K2", "Kilimanjaro"];
const rivers: string[] = ["Indus 2900", "Jehlum 725"];
// Array of countries
const countries: string[] = ["Pakistan", "Dubai", "Qater"];
// Array of cities
const cities: string[] = ["Karachi", "Faisal Abad", "Lahore"];
// Array of languages
const languages: string[] = ["English", "Urdu", "Panjabi"];
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
function printList(list: any[]): void {
  list.forEach((item) => console.log(item));
}

// Task (21)
// They think of something you could store in a TypeScript Object. Write a program that 
// creates Objects containing these items.

// Object for a book
interface Book {
  title: string;
  author: string;
  yearPublished: number;
}
const book: Book = {
  title: "The Lord of the Rings",
  author: "J.R.R. Tolkien",
  yearPublished: 1954,
};
// Object for a movie
interface Movie {
  title: string;
  director: string;
  releaseYear: number;
  genre: string;
}
const movie: Movie = {
  title: "The Shawshank Redemption",
  director: "Frank Darabont",
  releaseYear: 1994,
  genre: "Drama",
};
// Object for a person
interface Person {
  name: string;
  age: number;
  occupation: string;
}
const person: Person = {
  name: "Izhar Ahmed",
  age: 37,
  occupation: "Business Man",
};
// Print object details
function printObject(obj: any): void {
  for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
}
console.log("Book Details:");
printObject(book);
console.log("\nMovie Details:");
printObject(movie);
console.log("\nPerson Details:");
printObject(person);
