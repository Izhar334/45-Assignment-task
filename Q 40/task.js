// Task (40)
// Album: Write a function called make_album() that builds a Object describing a
// music album.The function should take in an artist name and an album title,
// and it should return a Object containing these two pieces of information.
// Use the function to make three dictionaries representing different albums.   
// Print each return value to show that Objects are storing the album information correctly.
// Add an optional parameter to make_album() that allows you to store the number of tracks
//  on an album. If the calling line includes a  value for the number of tracks, add that
// value to the album’s Object. Make at least one new function call that includes 
// the number of tracks on an album.
// Known artists array
var knownArtists = ["Atif Aslam", "Talha Anjum", "Azaan Sami Khan", "Ali Zafar"];
// Function to create an album object
function make_album(artist, title, tracks) {
    // if (!knownArtists.includes(artist)) {
    //     console.log(`Warning: The artist ${artist} is not in the list of known artists.`);
    // }
    var album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Create three albums without tracks information
var album1 = make_album("Atif Aslam", "Meri Kahani", 12);
var album2 = make_album("Talha Anjum", "Open leter", 13);
var album3 = make_album("Azaan Sami Khan", "Main Tera", 9);
// Print the albums to show they store the information correctly
console.log(album1);
console.log(album2);
console.log(album3);
// Create an album with tracks information
var album4 = make_album("Ali Zafar", "Huqa Pani", 17);
// Print the album with tracks to show the tracks information is stored correctly
console.log(album4);
// Create an album with an unknown artist to demonstrate the use of includes
var album5 = make_album("Unknown Artist", "Mystery Album");
// Print the album with an unknown artist
console.log(album5);
