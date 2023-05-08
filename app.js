const digits = document.querySelectorAll('.digits');
const operation = document.querySelectorAll('.operation');
const input = document.querySelector('#input');
const result = document.querySelector('#result');

const period = document.querySelector('.period');
const remove = document.querySelector('.delete');
const ac = document.querySelector('.ac');
const equal = document.querySelector('.equal');

let x;
let operator;
let y;
let total;

let operationClicked = true;
let numberClicked = false;
let dotClicked = false;

const checkOperator = /[\x+\-\/]/g;
const checkNumber = /[0-9]/;

ac.addEventListener('click', allClear);
function allClear() {
    x = undefined;
    operator = undefined;
    y = undefined;
    total = undefined;
    operationClicked = true;
    numberClicked = false;
    dotClicked = false;
    result.textContent = '0';
    input.textContent = '';
}

remove.addEventListener('click', deleteCalc);
function deleteCalc() {
    const deleted = input.textContent.slice(input.textContent.length - 1);
    if (deleted === '+' || deleted === '-' || deleted === 'x' || deleted === '/') {
        if (input.textContent.slice(0, input.textContent.length - 1).includes('.')) {
            dotClicked = true;
        } else {
            dotClicked = false;
        }
        operationClicked = false;
        numberClicked = true;
        deleteChar();
    } else if (deleted === '.') {
        dotClicked = false;
        deleteChar();
    }
    else {
        deleteChar();
    }
}
function deleteChar() {
    if (input.textContent.slice(0, input.textContent.length - 1) === '') {
        operationClicked = true;
        numberClicked = false;
        dotClicked = false;
    }
    input.textContent = input.textContent.slice(0, input.textContent.length - 1);
}

period.addEventListener('click', display);

digits.forEach(digit => digit.addEventListener('click', display));

operation.forEach(e => e.addEventListener('click', display));

function display() {
    if (input.textContent.length < 35) {
        if (checkNumber.test(this.textContent)) {
            operationClicked = false;
            numberClicked = true;
            input.textContent += this.textContent;
        }
        if ((this.textContent === '+' || this.textContent === '-' || this.textContent === 'x' || this.textContent === '/') && !operationClicked && numberClicked) {
            operationCalc(this);
        }
        if (this.textContent === '.' && !dotClicked && numberClicked) {
            dotClicked = true;
            numberClicked = false;
            input.textContent += this.textContent;
        }
    }
}

equal.addEventListener('click', () => {
    answerChecker();
    assignOperator();
    x = parseFloat(x);
    y = parseFloat(y);
    operate(operator);
    x = total.toString();
    y = '';
    operator = '';
    result.textContent = total;
    input.textContent = `${total}`;
});

function assignOperator() {
    let sign = input.textContent.slice(x.length, input.textContent.length - y.length);
    switch (sign) {
        case '+':
            operator = '+';
            break;
        case '-':
            operator = '-';
            break;
        case 'x':
            operator = 'x';
            break;
        case '/':
            operator = '/';
            break;
        default:
            operator = '';
    }
}

function calcFormula(e) {
    assignOperator();
    x = parseFloat(x);
    y = parseFloat(y);
    operate(operator);
    x = total.toString();
    y = '';
    result.textContent = total;
    operator = e.textContent;
    input.textContent = `${total}${operator}`;
}

function operationCalc(e) {
    answerChecker();
    if (input.textContent.split(checkOperator).length === 2 && input.textContent.split(checkOperator)[0] !== '') {
        calcFormula(e);
    } else if (input.textContent.split(checkOperator).length === 3) {
        calcFormula(e);
    } else {
        operator = e.textContent;
        input.textContent += operator;
    }
    operationClicked = true;
    dotClicked = false;
    numberClicked = false;
}

function answerChecker() {
    let numVar;
    if (Math.sign(result.textContent) === -1) {
        numVar = input.textContent.split(checkOperator);
        numVar.shift();
        x = '-' + numVar[0];
        y = numVar[1];
    } else {
        [x, y] = input.textContent.split(checkOperator);
    }
}

function operate(operator) {
    switch (operator) {
        case '+':
            total = Math.round(add(x, y) * 1000) / 1000;
            break;
        case '-':
            total = Math.round(substract(x, y) * 1000) / 1000;
            break;
        case 'x':
            total = Math.round(multiply(x, y) * 1000) / 1000;
            break;
        case '/':
            total = Math.round(division(x, y) * 1000) / 1000;
            break;
        default:
            total = 'ERROR';
    }
}

const add = function (x, y) {
    return x + y;
}

const substract = function (x, y) {
    return x - y;
}

const multiply = function (x, y) {
    return x * y;
}

const division = function (x, y) {
    return x / y;
}