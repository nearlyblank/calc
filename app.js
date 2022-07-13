let displayText = document.getElementsByClassName('displayText');
let click = 0;
let evalString = '';
let sum = '';



const sevenBtn = document.getElementById("seven");
sevenBtn.addEventListener('click', () => {
    screenCheck();
    displayText[0].textContent += '7';
});

const eightBtn = document.getElementById("eight");
eightBtn.addEventListener('click', () => {
    screenCheck();
    displayText[0].textContent += '8';
});

const nineBtn = document.getElementById("nine");
nineBtn.addEventListener('click', () => {
    screenCheck();
    displayText[0].textContent += '9';
});

const fourBtn = document.getElementById("four");
fourBtn.addEventListener('click', () => {
    screenCheck();
    displayText[0].textContent += '4';
});

const fiveBtn = document.getElementById("five");
fiveBtn.addEventListener('click', () => {
    screenCheck();
    displayText[0].textContent += '5';
});

const sixBtn = document.getElementById("six");
sixBtn.addEventListener('click', () => {
    screenCheck();
    displayText[0].textContent += '6';
});

const oneBtn = document.getElementById("one");
oneBtn.addEventListener('click', () => {
    screenCheck();
    displayText[0].textContent += '1';
});

const twoBtn = document.getElementById("two");
twoBtn.addEventListener('click', () => {
    screenCheck();
    displayText[0].textContent += '2';
});

const threeBtn = document.getElementById("three");
threeBtn.addEventListener('click', () => {
    screenCheck();
    evalString += '3';
    displayText[0].textContent = evalString;
    
});


const addBtn = document.getElementById("add");
addBtn.addEventListener('click', () => {
    screenCheck();
    evalString += '+';
    displayText[0].textContent = evalString;
});

const subtractBtn = document.getElementById("subtract");
subtractBtn.addEventListener('click', () => {
    screenCheck();
    displayText[0].textContent += '-';
});

const divideBtn = document.getElementById("divide");
divideBtn.addEventListener('click', () => {
    screenCheck();
    displayText[0].textContent += '÷';
});

const multiplyBtn = document.getElementById("multiply");
multiplyBtn.addEventListener('click', () => {
    screenCheck();
    displayText[0].textContent += '×';
});

const equalsBtn = document.getElementById("equals");
equalsBtn.addEventListener('click', () => {
    screenCheck();
    evaluate();
});

const clearBtn = document.getElementById("clear");
clearBtn.addEventListener('click', () => {
    screenCheck();
    clearScreen();
});

const dotBtn = document.getElementById("dot");
dotBtn.addEventListener('click', () => {
    screenCheck();
    displayText[0].textContent += '.';
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
}

function resetScreen () {
    displayText[0].textContent = '';
}

function screenCheck () {
    if (click === 0) {
        resetScreen();
        click++;
    }
}

function evaluate () {
    clearScreen();
    for (let i = 0; i < evalString.length; i++) {
        if (evalString[i] === '+') {
            sum += parseFloat(evalString[i-1]) + parseFloat(evalString[i+1]);
        }
        
    }
    displayText[0].textContent = sum;
}