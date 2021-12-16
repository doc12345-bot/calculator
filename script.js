function displayScreen(){
    display.innerHTML = displayValue;
    operateDisplay.innerHTML = operationValue;
};
//I think the basics are done at this point, time to check for bugs/errors/improvemtents.

var displayValue = 0;
var storedValue = "";
var operationValue = "";
var answerValue = "";


const buttons = document.querySelectorAll(".btn-number");
const operations = document.querySelectorAll(".btn-operator");
const decimal = document.getElementById("decimal");

operations.forEach((btn)=>btn.addEventListener("click", function updateOperateDisplay(e){
    const buttonValue= btn.getAttribute("data-num");
    operationValue= buttonValue;
    operateDisplay.innerHTML = operationValue;
    if (storedValue == ""){
        storedValue = displayValue;
        displayValue = 0;
        displayScreen();
    }
}));

buttons.forEach((btn)=>btn.addEventListener("click", function updateDisplay(e){
    const buttonValue= btn.getAttribute("data-num");
    if(displayValue === 0){
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
        return;
    } else {
        displayValue += buttonValue;
        display.innerHTML = displayValue;
    }
});

const sum = document.getElementById("sum");

sum.addEventListener("click", ()=> {
    displayValue = Number(displayValue);
    storedValue = Number(storedValue);
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
    displayValue = 0;
    storedValue = 0;
    display.innerHTML = answerValue;
    operateDisplay.innerHTML = operationValue;
});

const clear = document.getElementById("clear");

clear.addEventListener("click", ()=> {
    if(storedValue != ""){

    }
    displayValue = 0;
    storedValue = "";
    operationValue = "";
    displayScreen();
});

const plusMinus = document.getElementById("plusMinus");

plusMinus.addEventListener("click", () => {
    if(displayValue > 0){
        displayValue = 0 - displayValue;
        display.innerHTML = displayValue;
    } else if (displayValue < 0) {
        displayValue = displayValue * -1;
        display.innerHTML = displayValue;
    }
});

const percent = document.getElementById("percent");

percent.addEventListener("click", () => {
    displayValue = displayValue * 0.01;
    display.innerHTML = displayValue;
});

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