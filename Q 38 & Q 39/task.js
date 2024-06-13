"use strict";
// Task (38)
// Cities: Write a function called describe_city() that accepts the name of a city
//  and its country. The function should print a simple sentence, such as Karachi is in
// Pakistan. Give the parameter for the country a default value. Call your function for
//  three different cities, at least one of which is not in the default country.
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}
// Calling the function for three different cities
describe_city("Karachi");
describe_city("Lahore");
describe_city("Tokyo", "Japan");
// Task (39)
// City Names: Write a function called city_country() that takes in the name of a
//  city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value
//  that’s returned.
function city_country(city, country) {
    return `${city}, ${country}`;
}
// Calling the function with three city-country pairs
const cityCountry1 = city_country("Lahore", "Pakistan");
const cityCountry2 = city_country("Tokyo", "Japan");
const cityCountry3 = city_country("Paris", "France");
// Printing the returned values
console.log(cityCountry1); // Output: Lahore, Pakistan
console.log(cityCountry2); // Output: Tokyo, Japan
console.log(cityCountry3); // Output: Paris, France
