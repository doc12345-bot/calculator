var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var multiple = document.getElementById("multiply");
var divide = document.getElementById("divide");
var sum = document.getElementById("sum");
var clear = document.getElementById("clear");
var display = document.getElementById("display");

function displayScreen(){
    display.innerHTML = displayValue;
};

document.getElementById("meat").addEventListener("click", function(e){
    if(e.target && e.target.nodeName == "button"){
        console.log(e.textContent);
    };
});

one.addEventListener("click", () => {
    console.log(one);
    displayValue.push(one.textContent);
});

var displayValue = [0];
var storedValue;
var operationValue = "";

var btns = document.querySelectorAll("button");

//btns.forEach((btn)=>{btn.addEventListener("click", pushValue())});
/*
function pushValue(e){
    if(e.textContent == "+" || "-" || "/" || "x" || "=" || "CLEAR"){;
        operationValue = e.textContent;
        console.log(operationValue);
    } else {
        if(e.textContent == "0" && (displayValue.length = 1 && displayValue[0] == 0)){
            return;
        }
    };
}
*/
//Array.from(btns).forEach(function(div){console.log(div)});

const buttons = document.querySelectorAll(".btn-number");

buttons.forEach((btn)=>btn.addEventListener("click", function updateDisplay(e){
    if(displayValue.length = 1 && displayValue[0] === 0){
        displayValue[0] = btn.textContent;
        display.innerHTML = displayValue;
    } else {
        displayValue.push(btn.textContent)
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