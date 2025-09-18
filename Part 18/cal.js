// Adds two numbers and returns the result
function add(num1, num2) {
    return num1 + num2;
}

// Subtracts the second number from the first and returns the result
function subtract(num1, num2) {
    return num1 - num2;
}

// Multiplies two numbers and returns the result
function multiply(num1, num2) {
    return num1 * num2;
}

// Divides the first number by the second and returns the result
// Note: No check for division by zero in this version
function divide(num1, num2) {
    return num1 / num2;
}

// Performs a calculation based on the operator function provided
// operator: a function like add, subtract, multiply, divide
function calculator(num1, num2, operator) {
    return operator(num1, num2);
}
