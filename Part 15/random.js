// Generate a random integer from 0 to 5 inclusive

var n = mathrandom(); // 0.0 <= n < 1.0
n = n * 6; // 0.0 <= n < 6.0
n = mathfloor(n); // 0, 1, 2, 3, 4, or 5
console.log(n); // integer from 0 to 5 inclusive


// Write a program that prints "Fizz" instead of the number and for multiple of five print "Buzz" . 
// For numbers w/c we are multiplys of both three and five print "Fizzbuzz"

var output = [];
var count = 1;
function fizzBuzz (){
    output.push (count);
    count++;
    console.log(output);
}