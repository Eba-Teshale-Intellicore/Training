// Fibonacci Sequence

function fibonacci(n) {
    var fib = [0, 1]; // start with 0 and 1
    for (var i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n); // return only the first n numbers
}

console.log(fibonacci(10)); // first 10 Fibonacci numbers
