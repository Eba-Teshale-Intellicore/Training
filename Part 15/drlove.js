// // Love Calculator
// var nam1 = prompt ("Enter your name ");
// var nam2 = promt ("Enter your partner's name ");
// var n = mathrandom(); // 0.0 <= n < 1.0
// n = n * 100;
// n = mathfloor(n) + 1; // 1 <= n < 100
// return "Your love score is " + n + "%";

document.getElementById("calculateBtn").addEventListener("click", function() {
  var nam1 = prompt("Enter your name ");
  var nam2 = prompt("Enter your partner's name ");
  var n = Math.random(); // 0.0 <= n < 1.0
  n = n * 100;
  n = Math.floor(n) + 1; // 1 <= n <= 100
  document.getElementById("result").textContent = "Your love score is " + n + "%";
});
