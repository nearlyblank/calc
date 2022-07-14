let displayText = document.getElementsByClassName('displayText');
let evalString = '';
let sum = '';



const sevenBtn = document.getElementById("seven");
sevenBtn.addEventListener('click', () => {
    displayText[0].textContent += '7';
});

const eightBtn = document.getElementById("eight");
eightBtn.addEventListener('click', () => {
    displayText[0].textContent += '8';
});

const nineBtn = document.getElementById("nine");
nineBtn.addEventListener('click', () => {
    displayText[0].textContent += '9';
});

const fourBtn = document.getElementById("four");
fourBtn.addEventListener('click', () => {
    displayText[0].textContent += '4';
});

const fiveBtn = document.getElementById("five");
fiveBtn.addEventListener('click', () => {
    displayText[0].textContent += '5';
});

const sixBtn = document.getElementById("six");
sixBtn.addEventListener('click', () => {
    displayText[0].textContent += '6';
});

const oneBtn = document.getElementById("one");
oneBtn.addEventListener('click', () => {
    displayText[0].textContent += '1';
});

const twoBtn = document.getElementById("two");
twoBtn.addEventListener('click', () => {
    displayText[0].textContent += '2';
});

const threeBtn = document.getElementById("three");
threeBtn.addEventListener('click', () => {
    evalString += '3';
    displayText[0].textContent = evalString;
});

const zeroBtn = document.getElementById("zero");
zeroBtn.addEventListener('click', () => {
    displayText[0].textContent += '0';
});

const doublezeroBtn = document.getElementById("doublezero");
doublezeroBtn.addEventListener('click', () => {
    displayText[0].textContent += '00';
});

const dotBtn = document.getElementById("dot");
dotBtn.addEventListener('click', () => {
    displayText[0].textContent += '.';
});

const addBtn = document.getElementById("add");
addBtn.addEventListener('click', () => {
    evalString += '+';
    displayText[0].textContent = evalString;
});

const subtractBtn = document.getElementById("subtract");
subtractBtn.addEventListener('click', () => {
    displayText[0].textContent += '-';
});

const divideBtn = document.getElementById("divide");
divideBtn.addEventListener('click', () => {
    displayText[0].textContent += '÷';
});

const multiplyBtn = document.getElementById("multiply");
multiplyBtn.addEventListener('click', () => {
    displayText[0].textContent += '×';
});

const equalsBtn = document.getElementById("equals");
equalsBtn.addEventListener('click', () => {
    evaluate();
});

const clearBtn = document.getElementById("clear");
clearBtn.addEventListener('click', () => {
    clearScreen();
});



function operate (operator) {
    resetScreen();
}

function add (num1, num2) {
    return num1 + num2;
}

function subtract (num1, num2) {
    return num1 - num2;
}

function multiply (num1, num2) {
    return num1 * num2;
}

function divide (num1, num2) {
    let result = num1 / num2;
    return result.toFixed(4); //this may be an issue? returning a string
}

function clearScreen () {
    displayText[0].textContent = '0';
    evalString = '';
}

function resetScreen () {
    displayText[0].textContent = '';
}

function evaluate () {
    for (let i = 0; i < evalString.length; i++) {
        if (evalString[i] === '+') {
            sum += parseFloat(evalString[i-1]) + parseFloat(evalString[i+1]);
        }
        
    }
    displayText[0].textContent = sum;
}