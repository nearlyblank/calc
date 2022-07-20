const displayText = document.getElementsByClassName('displayText');
const displaySolution = document.getElementsByClassName('displaySolution');
let expr = '';
let sum = 0;
let solution = 0;
let dotCount = 0;
let opCount = 0;
let btnCount = 0;

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
    operator = '-'
});

const divideBtn = document.getElementById("divide");
divideBtn.addEventListener('click', () => {
    opCount++;
    opCheck();
    resetDotCheck();
    operator = '/'
});

const multiplyBtn = document.getElementById("multiply");
multiplyBtn.addEventListener('click', () => {
    opCount++;
    opCheck();
    resetDotCheck();
    operator = '*'
});

const addBtn = document.getElementById("add");
addBtn.addEventListener('click', () => {
    opCount++;
    opCheck();
    resetDotCheck();
    operator = '+'
});


const equalsBtn = document.getElementById("equals");
equalsBtn.addEventListener('click', () => {
    solution = evaluate()
});

const clearBtn = document.getElementById("clear");
clearBtn.addEventListener('click', () => {
    clearScreen();
    resetDotCheck();
    resetOpCheck();
});



function evaluate (num1, num2, operator) {
    if(operator === '+') {
        return num1 + num2;
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

function clearScreen () {
    displayText[0].textContent = '0';
    displaySolution[0].textContent = '0';
    displayText[0].style.opacity = '0';
    expr = '';
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
    displaySolution[0].textContent = solution;
}