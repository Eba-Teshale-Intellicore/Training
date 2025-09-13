// String Concatinations

alert( "Hello " + "World" );
alert("Hello" + " " + "World" + "!");
alert("Hello" + " World")

// for variables
var message = "Hello";
var name = "John";
alert( message + " " + name + "!" );

// string length and retrieving characters
var myName ="Eba Teshale";
myName.length; // 11


// Exercise
// Update: You have 280 characters to play with! How many characters are left?
var char = prompt("You have 280 characters to play with!");
var count = char.length;
var left = 280 - count;

if (count <= 280) {
    // No trimming needed, it's already valid
    alert("You have written " + count + " characters and you have " + left + " characters left.");
} else {
    // Too long, cut it down to 280
    var slicing = char.slice(0, 280);
    alert("Your text was too long! Trimmed version: " + slicing);
}

// OR
var tweet = prompt("Compose your tweet:");
var tweetslicing = tweet.slice(0, 280);
alert("Your tweet is: " + tweetslicing + "\nCharacters left: " + (280 - tweetslicing.length));