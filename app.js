let displayText = document.getElementsByClassName('displayText');
let evalString = '';
let sum = 0;

const numBtns = document.querySelectorAll('.digitBtn');
numBtns.forEach(numBtn => {
    numBtn.addEventListener('click', () => {
        displayText[0].style.opacity = '1';
        evalString += numBtn.innerText;
        updateScreen();
    })
});

const dotBtn = document.getElementById("dot");
dotBtn.addEventListener('click', () => {

});


const subtractBtn = document.getElementById("subtract");
subtractBtn.addEventListener('click', () => {
    evalString += numBtn.innerText;
    updateScreen();
});

const divideBtn = document.getElementById("divide");
divideBtn.addEventListener('click', () => {
    evalString += numBtn.innerText;
    updateScreen();
});

const multiplyBtn = document.getElementById("multiply");
multiplyBtn.addEventListener('click', () => {
    evalString += numBtn.innerText;
    updateScreen();
});

const equalsBtn = document.getElementById("equals");
equalsBtn.addEventListener('click', () => {
    evaluate();
});

const clearBtn = document.getElementById("clear");
clearBtn.addEventListener('click', () => {
    clearScreen();
});



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
    return result.toFixed(4); 
}

function clearScreen () {
    displayText[0].textContent = '0';
    displayText[0].style.opacity = '0';
    evalString = '';
}

function updateScreen () {
    displayText[0].textContent = evalString;
}



//Finding a way to evaluate an entire string sure would have been nice
// function evaluate () {
//     let s = evalString;
//     s = s.replace(/\s/g, '').match(/[+\-]?([0-9\.\s]+)/g) || [];
//     while(s.length) sum += parseFloat(s.shift());

    
//     displayText[0].textContent = sum;
//     evalString = '';
//     sum = 0;
// }