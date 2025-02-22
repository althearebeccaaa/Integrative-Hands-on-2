function addNumbers(a, b) {
    return a + b;
}

let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));

let sum = addNumbers(num1, num2);
alert("The sum is: " + sum);
