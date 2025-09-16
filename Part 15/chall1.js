        //  The Challenge
// Write a program that prints the numbers from 1 to 100. 
// But for multiples of three print "FIZZ" instead of the numbers and for multiples of five print "Buzz". 
// For numbers w/c are multiples of both three and five print "FIZZBUZZ". 

// // 1st Version
// var output = [];
// var count = 1;

// function fizzBuzz() {
//     output.push(count);
//     count++;
//     console.log(output);
// }

// output looks like: [1, 2, 3, 4, 5]


// 2nd Version
var output = [];
var count = 1;

function fizzBuzz() {
    if (count % 3 === 0 && count % 5 === 0) {
        output.push("FIZZBUZZ");
    } else if (count % 3 === 0) {
        output.push("FIZZ");
    } else if (count % 5 === 0) {
        output.push("Buzz");
    } else {
        output.push(count);
    }

    console.log(output);
    count++;
}

// output looks like: [1, 2, "FIZZ", 4, "Buzz"]


// First code → always numbers.
// Second code → numbers, but replaced with "FIZZ", "Buzz", or "FIZZBUZZ" at the right spots.