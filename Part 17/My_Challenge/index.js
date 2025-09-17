let score1 = 0; // Player 1 score
let score2 = 0; // Player 2 score
let rollsLeft = 10; // Max rolls per game
const rollsLeftDisplay = document.getElementById("rollsLeft");

document.getElementById("rollBtn").addEventListener("click", function() {
    if (rollsLeft <= 0) {
        // Reset game automatically
        score1 = 0;
        score2 = 0;
        rollsLeft = 10;
        document.getElementById("dice1").src = "images/dice1.png";
        document.getElementById("dice2").src = "images/dice1.png";
        document.getElementById("result").textContent = "New Game! Try Draw Again";
        document.getElementById("score1").innerHTML = score1;
        document.getElementById("score2").innerHTML = score2;
        rollsLeftDisplay.textContent = rollsLeft;
        return;
    }

    // Pick random numbers between 1 and 6
    let random1 = Math.floor(Math.random() * 6) + 1;
    let random2 = Math.floor(Math.random() * 6) + 1;

    // Change the images based on random numbers
    document.getElementById("dice1").src = "images/dice" + random1 + ".png";
    document.getElementById("dice2").src = "images/dice" + random2 + ".png";

    // Update the result text
    if (random1 > random2) {
        document.getElementById("result").textContent = "🚩 Player 1 Wins!";
        score1++;
    } else if (random1 < random2) {
        document.getElementById("result").textContent = "Player 2 Wins! 🚩";
        score2++;
    } else {
        document.getElementById("result").textContent = "Draw Again 🎲";
    }

    document.getElementById("score1").innerHTML = score1;
    document.getElementById("score2").innerHTML = score2;

    // Decrease rolls left and update display
    rollsLeft--;
    rollsLeftDisplay.textContent = rollsLeft;
});
