const buttons = document.querySelectorAll(".btn-number");
const operations = document.querySelectorAll(".btn-operator");
const decimal = document.getElementById("decimal");
const sum = document.getElementById("sum");
const clear = document.getElementById("clear");
const plusMinus = document.getElementById("plusMinus");
const percent = document.getElementById("percent");

var displayValue = 0;
var storedValue = "";
var operationValue = "";
var answerValue = "";
var decimalDisabled = false;

function displayScreen(){
    display.innerHTML = displayValue;
    operateDisplay.innerHTML = operationValue;
};

operations.forEach((btn)=>btn.addEventListener("click", function updateOperateDisplay(){
    const buttonValue= btn.getAttribute("data-num");
    decimal.disabled = false;
    if(operationValue == ""){
        operationValue = buttonValue;
        operateDisplay.innerHTML = operationValue; 
    } else {
        displayValue = Number(displayValue);
        storedValue = Number(storedValue);
        summation(displayValue, storedValue)
    }
    if (storedValue == ""){
        storedValue = displayValue;
        displayValue = 0;
        displayScreen();
    }
}));

buttons.forEach((btn)=>btn.addEventListener("click", function updateDisplay(){
    const buttonValue= btn.getAttribute("data-num");
    if(displayValue === 0){
        displayValue = buttonValue;
        display.innerHTML = displayValue;
    } else if (displayValue == answerValue){
        displayValue = buttonValue;
        display.innerHTML = displayValue;
    } else {
        displayValue += buttonValue;
        display.innerHTML = displayValue;
    };
}));

decimal.addEventListener("click", () => {
    const buttonValue = decimal.getAttribute("data-num");
    if(displayValue - Math.floor(displayValue) > 0){
        console.log(displayValue);
        return;
    } else {
        decimal.disabled = true;
        displayValue += buttonValue;
        display.innerHTML = displayValue;
    };
});

sum.addEventListener("click", ()=> {
    displayValue = Number(displayValue);
    storedValue = Number(storedValue);
    decimal.disabled = false;
    summation(displayValue, storedValue)
});

clear.addEventListener("click", ()=> {
    if(storedValue != ""){
//this will be to differentiate between AC and C, eventually.
    }
    displayValue = 0;
    storedValue = "";
    operationValue = "";
    answerValue = "";
    decimal.disabled = false;
    displayScreen();
});

plusMinus.addEventListener("click", () => {
    if(displayValue > 0){
        displayValue = 0 - displayValue;
        display.innerHTML = displayValue;
    } else if (displayValue < 0) {
        displayValue = displayValue * -1;
        display.innerHTML = displayValue;
    }
});

//makes display value 10%
percent.addEventListener("click", () => {
    displayValue = displayValue * 0.01;
    display.innerHTML = displayValue;
    decimal.disabled = false;
});

//computes output based on button history and input
function summation(a, b){
    if (storedValue == 0 && operationValue == "/") {
        alert("Please don't try to divide by 0");
        storedValue = "";
        displayValue = 0;
        operationValue = "";
        displayScreen();
    };
    if (operationValue == "+"){
        answerValue = add(storedValue, displayValue);
    } else if (operationValue == "*"){
        answerValue = multiply(storedValue, displayValue);
    } else if (operationValue == "-"){
        answerValue = subtract(storedValue, displayValue);
    } else if (operationValue == "/"){
        answerValue = divide(storedValue, displayValue);
    } 
    operationValue = "";
    displayValue = answerValue;
    storedValue = 0;
    display.innerHTML = answerValue;
    operateDisplay.innerHTML = operationValue;
};
//basic calculator functions
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

if(displayValue.toString().length >= 19) {
    console.log(displayValue);
    displayValue = displayValue.toFixed(10);
    displayScreen();
};