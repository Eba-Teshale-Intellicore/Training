    // Lyrics of the song 99 bottles of bear.

var numberOfBottles = 99;

while (numberOfBottles >= 0) {
    var bottleWord = "bottles";

    if (numberOfBottles === 1) {
        bottleWord = "bottle";
    } else if (numberOfBottles === 0) {
        console.log("No more bottles of beer on the wall");
        console.log("No more bottles of beer,");
        console.log("Go to the store and buy some more,");
        console.log("99 bottles of beer on the wall.\n");
        break; // end the loop so it doesn’t go negative
    }

    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");

    numberOfBottles--;

    var nextBottleWord = numberOfBottles === 1 ? "bottle" : "bottles";
    var displayNumber = numberOfBottles === 0 ? "No more" : numberOfBottles;

    console.log(displayNumber + " " + nextBottleWord + " of beer on the wall.\n");
}
