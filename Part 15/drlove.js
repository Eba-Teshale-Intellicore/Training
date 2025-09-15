// // Love Calculator
// var nam1 = prompt ("Enter your name ");
// var nam2 = promt ("Enter your partner's name ");
// var n = mathrandom(); // 0.0 <= n < 1.0
// n = n * 100;
// n = mathfloor(n) + 1; // 1 <= n < 100
// return "Your love score is " + n + "%";

document.getElementById("calculateBtn").addEventListener("click", function() {
  var nam1 = prompt("Enter your name");
  var nam2 = prompt("Enter your partner's name");
  
  var n = Math.floor(Math.random() * 100) + 1; // 1 <= n <= 100
  
  // Personalized alert messages
  if (n === 100) {
    alert(nam1 + " and " + nam2 + ": Perfect match! ❤️ 100% compatible!");
  } else if (n >= 75) {
    alert(nam1 + " and " + nam2 + ": Great match! 💖 Your score: " + n + "%");
  } else if (n >= 50) {
    alert(nam1 + " and " + nam2 + ": Good match! 😊 Your score: " + n + "%");
  } else if (n >= 25) {
    alert(nam1 + " and " + nam2 + ": Hmm… could work. 🤔 Your score: " + n + "%");
  } else {
    alert(nam1 + " and " + nam2 + ": Better luck next time. 💔 Your score: " + n + "%");
  }

  // Display on the page
  document.getElementById("result").textContent = nam1 + " ❤️ " + nam2 + " = " + n + "%";
});
