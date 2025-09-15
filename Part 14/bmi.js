function bmicalculator(weight, height) {
    var bmicalculator = weight / (height * height);
    return Math.round(bmicalculator);
}

var bmi = bmicalculator(65, 1.8);
console.log(bmi);