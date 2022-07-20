const displayText = document.getElementsByClassName('displayText');
const displaySolution = document.getElementsByClassName('displaySolution');
let dotCount = 0;
let opCount = 0;
let btnCount = 0;
let expr = '';
let num1 = '';
let num2 = '';
let operator = '';


const numBtns = document.querySelectorAll('.digitBtn');
numBtns.forEach(numBtn => {
    numBtn.addEventListener('click', () => {
        btnCount++;
        opCheck();
        dotCheck();
        resetOpCheck();
        displayText[0].style.opacity = '1';
        expr += numBtn.innerText;
        updateScreen();
    })
});

const dotBtn = document.getElementById("dot");
dotBtn.addEventListener('click', () => {
    dotCount++;
    dotCheck();
});

const subtractBtn = document.getElementById("subtract");
subtractBtn.addEventListener('click', () => {
    opCount++;
    opCheck();
    resetDotCheck();
});

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

const addBtn = document.getElementById("add");
addBtn.addEventListener('click', () => {
    opCount++;
    opCheck();
    resetDotCheck();
});

const equalsBtn = document.getElementById("equals");
equalsBtn.addEventListener('click', () => {
    firstValue();
});

const clearBtn = document.getElementById("clear");
clearBtn.addEventListener('click', () => {
    clearScreen();
    resetDotCheck();
    resetOpCheck();
});


function evaluate (num1, num2, operator) {
    if(operator === '+') {
        return parseFloat(num1) + parseFloat(num2);
    }
    else if (operator === '-') {
        return num1 - num2;
    }
    else if (operator === '*') {
        return num1 * num2;
    }
    else if (operator === '/') {
        if (num2 === 0) {
            return `that's not gonna work`;
        }
        else {
            return num1 / num2;
        }
    }
}

function firstValue() {
    let i = 0;
    while (expr[i] !== '/' && expr[i] !== '+' && expr[i] !== '-' && expr[i] !== '*') {
        num1 += expr[i];
        i++
    }
    while (expr[i] === '/' || expr[i] === '+' || expr[i] === '-' || expr[i] === '*') {
        operator = expr[i];
        i++;
        secondValue(i);
    }
}

function secondValue(i) {
    for (i; i < expr.length; i++) {
        num2 += expr[i];
    }
    displaySolution[0].textContent = Math.round((evaluate(num1,num2, operator) + Number.EPSILON) * 10000) / 10000;
}

function clearScreen () {
    displayText[0].textContent = '0';
    displaySolution[0].textContent = '0';
    displayText[0].style.opacity = '0';
    expr = '';
    num1 = '';
    num2 = '';
    operator = '';

}

function dotCheck () {
    if (dotCount > 0 ) {
        dotBtn.disabled = true;
    }
}

function opCheck () {
    if (opCount > 0 || btnCount === 0) {
        addBtn.disabled = true;
        subtractBtn.disabled = true;
        multiplyBtn.disabled = true;
        divideBtn.disabled = true;
    }
}

function resetOpCheck () {
    opCount = 0;
    addBtn.disabled = false;
    subtractBtn.disabled = false;
    multiplyBtn.disabled = false;
    divideBtn.disabled = false;
}

function resetDotCheck () {
    dotCount = 0;
    dotBtn.disabled = false;
}

function updateScreen () {
    displayText[0].textContent = expr;
    displaySolution[0].textContent = '0';
}