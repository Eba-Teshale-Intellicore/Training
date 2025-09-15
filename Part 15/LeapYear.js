// function isLeapYear(year) {
//   if (year % 400 === 0) {
//     return true;
//   } else if (year % 100 === 0) {
//     return false;
//   } else if (year % 4 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(2000, "→", isLeapYear(2000)); // true
// console.log(1900, "→", isLeapYear(1900)); // false
// console.log(2024, "→", isLeapYear(2024)); // true
// console.log(2023, "→", isLeapYear(2023)); // false

function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

document.getElementById("checkBtn").addEventListener("click", function () {
  const yearInput = document.getElementById("yearInput").value;
  const resultDiv = document.getElementById("result");

  if (!yearInput) {
    resultDiv.textContent = "⚠️ Please enter a year.";
    resultDiv.className = "alert alert-warning";
    resultDiv.classList.remove("d-none");
    return;
  }

  const year = parseInt(yearInput);
  if (isNaN(year)) {
    resultDiv.textContent = "⚠️ Invalid input.";
    resultDiv.className = "alert alert-danger";
    resultDiv.classList.remove("d-none");
    return;
  }

  if (isLeapYear(year)) {
    resultDiv.textContent = year + " is a Leap Year! 🎉";
    resultDiv.className = "alert alert-success";
  } else {
    resultDiv.textContent = year + " is NOT a Leap Year.";
    resultDiv.className = "alert alert-danger";
  }

  resultDiv.classList.remove("d-none");
});
