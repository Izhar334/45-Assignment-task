// Task (05)
// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a 
// variable called famous_person. Then compose your message and store it in a new variable 
// called message. Print your message.
var famous_person = "Malala Yousafzai:";
var message;
message =
    '"One child, one teacher, one book, one pen can change the world."';
console.log(famous_person + message);
// Task (06)
// Stripping Names: Store a person’s name, and include some whitespace characters at the
//  beginning and end of the name. Make sure you use each character combination, "\t" and 
//  "\n", at least once. Print the name once, so the whitespace around the name is displayed. 
//  Then print the name after striping the white spaces.
var name1 = "\t  Imran Khan  \n";
console.log("Name with whitespace:\n" + name1);
var strippedName = name1.trim();
console.log("Name without whitespace:\n" + strippedName);
