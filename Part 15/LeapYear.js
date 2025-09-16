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

document.getElementById("checkBtn").addEventListener("click", function() {
  const year = parseInt(document.getElementById("yearInput").value);
  const resultDiv = document.getElementById("result");

  if (isNaN(year)) {
    resultDiv.innerHTML = `<div class="alert alert-warning">Please enter a valid year!</div>`;
    return;
  }

  let explanation = `<ul>`;
  explanation += `<li>Divisible by 4: ${year % 4 === 0 ? "Yes" : "No"}</li>`;
  explanation += `<li>Divisible by 100: ${year % 100 === 0 ? "Yes" : "No"}</li>`;
  explanation += `<li>Divisible by 400: ${year % 400 === 0 ? "Yes" : "No"}</li>`;
  explanation += `</ul>`;

  if (year % 400 === 0) {
    resultDiv.innerHTML = `
      <div class="alert alert-success">
        <strong>${year} is a Leap Year!</strong>
        ${explanation}
      </div>
    `;
  } else if (year % 100 === 0) {
    resultDiv.innerHTML = `
      <div class="alert alert-danger">
        <strong>${year} is NOT a Leap Year!</strong>
        ${explanation}
      </div>
    `;
  } else if (year % 4 === 0) {
    resultDiv.innerHTML = `
      <div class="alert alert-success">
        <strong>${year} is a Leap Year!</strong>
        ${explanation}
      </div>
    `;
  } else {
    resultDiv.innerHTML = `
      <div class="alert alert-danger">
        <strong>${year} is NOT a Leap Year!</strong>
        ${explanation}
      </div>
    `;
  }
});


    // The flow of Leap Year Calcu
//            ┌─────────────┐
//            │  Year Input │
//            └─────┬───────┘
//                  │
//                  ▼
//            ┌─────────────┐
//            │ Divisible by│
//            │  4?         │
//            └─────┬───────┘
//          Yes │       │ No
//              ▼       ▼
//      ┌─────────────┐  Not Leap Year
//      │ Divisible by│
//      │ 100?        │
//      └─────┬───────┘
//    Yes │         │ No
//        ▼         ▼
//  ┌─────────────┐  Leap Year
//  │ Divisible by│
//  │ 400?        │
//  └─────┬───────┘
// Yes │     │ No
//    ▼       ▼
// Leap Year  Not Leap Year


function isleap(Year){
  if (year % 4 === 0){
    if (year % 100 ===0){
      if (year % 400 === 0){
        return "Leap Year"
      }else{
        return "Not leap Year"
      }
    }else{
      return "Leap Year"
    }
  } else{
    return "Not leap Year"
  }
}