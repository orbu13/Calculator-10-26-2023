// Business logic
function add(num1 ,num2){
    return num1 + num2;
}

function subtraction(num1 ,num2){
    return num1 - num2;
}

function multiplication(num1 ,num2){
    return num1 * num2;
}

function division(num1 ,num2){
    return num1 / num2;
}

// User interface logic
const num1 = parseInt(prompt("enter a number:"));
const num2 = parseInt(prompt("enter a number:"));



const addResult = add(num1, num2);

const subtractResult = subtraction(num1, num2);

const multiplyResult = multiplication(num1, num2);

const divideResult =  division(num1, num2);

window.alert(num1 + " + " + num2 + " = " + addResult + "," + num1 + " - " + num2 + " = " + subtractResult + ","  + num1 + " * " + num2 + " = " + multiplyResult + ","  + num1 + " / " + num2 + " = " + divideResult + "," );
