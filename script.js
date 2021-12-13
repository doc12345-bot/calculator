function displayScreen(){
    display.innerHTML = displayValue;
    operateDisplay.innerHTML = operationValue;
};


var displayValue = "0";
var storedValue = "";
var operationValue = "";


const buttons = document.querySelectorAll(".btn-number");
const operations = document.querySelectorAll(".btn-operator");

operations.forEach((btn)=>btn.addEventListener("click", function updateOperateDisplay(e){
    const buttonValue= btn.getAttribute("data-num");
    operationValue= buttonValue;
    operateDisplay.innerHTML = operationValue;
    if (storedValue = null){
        storedValue = displayValue;
        displayValue = 0;
        display.innerHTML = displayValue;
    }
}))

buttons.forEach((btn)=>btn.addEventListener("click", function updateDisplay(e){
    const buttonValue= btn.getAttribute("data-num");
    if(displayValue === "0"){
        displayValue = buttonValue;
        display.innerHTML = displayValue;
    } else {
        displayValue += buttonValue;
        display.innerHTML = displayValue;
    }
}))

function add(a, b){
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function divide(a, b) {
    return a/b;
};

function multiply(a,b){
    return a*b;
};

function operate(num1, num2) {
    if(operationValue == "add"){
        return add(num1, num2);
    } else if (operationValue == "subtract") {
        return subtract(num1, num2);
    } else if (operationValue == "divide"){
        return divide(num1, num2);
    } else if (operationValue == "multiply"){
        return multiply(num1, num2);
    };
};