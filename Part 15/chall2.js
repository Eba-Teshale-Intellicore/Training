        // Challenge: Who’s Buying Lunch?
// Write a function that selects a random name from a list of names. The person selected will have to pay for everyone’s food bill.
// Important:
// The function should return the result (not use alert, prompt, or console.log).
// The output must match the format exactly, including capitalization and punctuation.
// Example Input:
// ["Angela", "Ben", "Jerry", "Chloe", "Michael"]
// Example Output:
// Michael is going to buy lunch today!


function whosPaying(names) {
    // Pick a random index
    var randomIndex = Math.floor(Math.random() * names.length);
    // Get the random name
    var chosen = names[randomIndex];
    // Return the sentence
    return chosen + " is going to buy lunch today!";
}
