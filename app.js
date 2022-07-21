let displayText = '';
let dotCount = 0;
let opCount = 1;
let btnCount = 0;
let num1 = '';
let num2 = '';
let operator = '';
let operatorCheck = false;
let result = '';
const allOperators = ['/', '*', '-', '+'];

const display = document.getElementsByClassName('display');

const dotBtn = document.getElementById('dot');
dotBtn.addEventListener('click', () => {
    dotCount++;
    dotCheck();
});

const numBtns = document.querySelectorAll('.numBtn');
numBtns.forEach(numBtn => {
    numBtn.addEventListener('click', (e) => {
        btnCount++;
        resetOpCheck();
        displayText += e.target.textContent; //this seems silly, but it prevents the beginning 0 from being appended to the display
        display[0].textContent = displayText;

        operatorCheck = allOperators.includes(e.target.textContent);
        if (num1 && operatorCheck) {
            if (num2) {
                calculate();
                resetOpCheck();
                resetDotCheck();
            }
            operator = e.target.textContent;
        }

        else if(!operator) {
            num1 += e.target.textContent;
        }

        else if (operator) {
            num2 += e.target.textContent;
        }
    })
});

//unfortunately creating these specific operation buttons was the only solution I
//could find to disable the operation buttons
const divideBtn = document.getElementById("divide");
divideBtn.addEventListener('click', () => {
    opCount++;
    opCheck();
    resetDotCheck();
});

const multiplyBtn = document.getElementById("multiply");
multiplyBtn.addEventListener('click', () => {
    opCount++;
    opCheck();
    resetDotCheck();
});

const subtractBtn = document.getElementById("subtract");
subtractBtn.addEventListener('click', () => {
    opCount++;
    opCheck();
    resetDotCheck();
});

const addBtn = document.getElementById("add");
addBtn.addEventListener('click', () => {
    opCount++;
    opCheck();
    resetDotCheck();
});

const equalsBtn = document.getElementById("equals");
equalsBtn.addEventListener('click', () => {
    calculate();
    resetOpCheck();
    resetDotCheck();
});

const clearBtn = document.getElementById("clear");
clearBtn.addEventListener('click', () => {
    clearScreen();
    resetDotCheck();
    buttonDisable();
});

//buttons disabled by default to prevent input beginning with operations
buttonDisable();

const calculate = () => {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
  
    if (operator === '+') result = num1 + num2;
    if (operator === '-') result = num1 - num2;
    if (operator === '*') result = num1 * num2;
    if (operator === '/') result = num1 / num2;
  
    result = Math.round((result + Number.EPSILON) * 10000) / 10000;
    displayText = result;
    display[0].textContent = displayText;
    num1 = result;
    num2 = '';
  }

function clearScreen () {
    display[0].textContent = '0';
    displayText = ''
    num1 = '';
    num2 = '';
    operator = '';
    result = '';
    resetDotCheck();
    resetOpCheck();
}

function dotCheck () {
    if (dotCount > 0 ) {
        dotBtn.disabled = true;
    }
}

function opCheck () {
    if (opCount > 0 || btnCount === 0) {
        subtractBtn.disabled = true;
        addBtn.disabled = true;
        multiplyBtn.disabled = true;
        divideBtn.disabled = true;
    }
}

function resetOpCheck () {
    opCount = 0;
    subtractBtn.disabled = false;
    addBtn.disabled = false;
    multiplyBtn.disabled = false;
    divideBtn.disabled = false;
}

function buttonDisable() {
    subtractBtn.disabled = true;
    addBtn.disabled = true;
    multiplyBtn.disabled = true;
    divideBtn.disabled = true;
}

function resetDotCheck () {
    dotCount = 0;
    dotBtn.disabled = false;
}

//TODO: add string length limiter to display
// find out why operator is not getting appended to display