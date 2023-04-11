const digits = document.querySelectorAll('.digits');
const extra = document.querySelectorAll('.extra');
const operations = document.querySelectorAll('.operations');
const input = document.querySelector('.input-value');
const result = document.querySelector('.result');

let x = 0;                                  // variables
let operator = '';
let y = 0;
let aa = '';
let answer;

const remove = document.querySelector('.delete'); // delete selector
remove.addEventListener('click', () => {          // delete event listener
    input.textContent = input.textContent.slice(0, input.textContent.length - 1)
})


const equal = document.querySelector('.equal');             //eaual selector
equal.addEventListener('click', () => {                     //equal event listener
    aa = '';
    if (input.textContent.includes('+')) {
        if (input.textContent.includes('+') && input.textContent.indexOf('+') === input.textContent.length - 1) {
            return;
        } else if (input.textContent.includes('+')) {
            operator = '+';
            [x, y] = input.textContent.split('+')
            x = parseFloat(x);
            y = parseFloat(y);
            answer = Math.round(operate(x, y, operator) * 100) / 100;
            result.textContent = answer;
            x = answer;
            input.textContent = x;
            y = 0;
        }
    } else if (input.textContent.includes('-')) {
        if (input.textContent.includes('-') && input.textContent.indexOf('-') === input.textContent.length - 1) {
            return;
        } else if (input.textContent.includes('-')) {
            operator = '-';
            [x, y] = input.textContent.split('-')
            x = parseFloat(x);
            y = parseFloat(y);
            answer = Math.round(operate(x, y, operator) * 100) / 100;
            result.textContent = answer;
            x = answer;
            input.textContent = x;
            y = 0;
        }
    } else if (input.textContent.includes('x')) {
        if (input.textContent.includes('x') && input.textContent.indexOf('x') === input.textContent.length - 1) {
            return;
        } else if (input.textContent.includes('x')) {
            operator = 'x';
            [x, y] = input.textContent.split('x')
            x = parseFloat(x);
            y = parseFloat(y);
            answer = operate(x, y, operator);
            result.textContent = answer;
            x = answer;
            input.textContent = x;
            y = 0;
        }
    } else if (input.textContent.includes('÷')) {
        if (input.textContent.includes('÷') && input.textContent.indexOf('÷') === input.textContent.length - 1) {
            return;
        } else if (input.textContent.includes('÷')) {
            operator = '÷';
            [x, y] = input.textContent.split('÷')
            x = parseFloat(x);
            y = parseFloat(y);
            answer = operate(x, y, operator);
            result.textContent = answer;
            x = answer;
            input.textContent = x;
            y = 0;
        }
    }
})

const ac = document.querySelector('.ac');   // for CLEAR
ac.addEventListener('click', () => {       // clear Event listener
    x = 0;                                  // variables
    operator = '';
    y = 0;
    aa = '';
    answer = 0;
    input.textContent = '';
    result.textContent = answer;
})

digits.forEach(digit => {                   // for the DIGITS
    digit.addEventListener('click', displayValue);
})

function displayValue(e) {                  // Display function
    input.textContent += e.target.textContent;
    aa += e.target.textContent;
}

const period = document.querySelector('.period'); // period selector
period.addEventListener('click', (e) => {         //periodeventlistener
    if (!aa.includes('.')) displayValue(e)
})

const plus = document.querySelector('.plus');     //plus selector
plus.addEventListener('click', (e) => {           //plus event listener
    aa = '';
    if ((input.textContent.includes('+') || input.textContent.includes('-') || input.textContent.includes('x') || input.textContent.includes('÷')) && (input.textContent.indexOf('+') === input.textContent.length - 1 || input.textContent.indexOf('-') === input.textContent.length - 1 || input.textContent.indexOf('÷') === input.textContent.length - 1 || input.textContent.indexOf('x') === input.textContent.length - 1)) {
        return;
    } else if (input.textContent.includes('+') || input.textContent.includes('-') || input.textContent.includes('x') || input.textContent.includes('÷')) {
        if (input.textContent.includes('+')) operator = '+';
        if (input.textContent.includes('-')) operator = '-';
        if (input.textContent.includes('x')) operator = 'x';
        if (input.textContent.includes('÷')) operator = '÷';
        [x, y] = input.textContent.split(operator)
        x = parseFloat(x);
        y = parseFloat(y);
        answer = Math.round(operate(x, y, operator) * 100) / 100;
        result.textContent = answer;
        x = answer;
        input.textContent = x;
        y = 0;

    }
    input.textContent += e.target.textContent
});
const minus = document.querySelector('.minus');     //minus selector
minus.addEventListener('click', (e) => {           //minus event listener
    aa = '';
    if ((input.textContent.includes('+') || input.textContent.includes('-') || input.textContent.includes('x') || input.textContent.includes('÷')) && (input.textContent.indexOf('+') === input.textContent.length - 1 || input.textContent.indexOf('-') === input.textContent.length - 1 || input.textContent.indexOf('÷') === input.textContent.length - 1 || input.textContent.indexOf('x') === input.textContent.length - 1)) {
        return;
    } else if (input.textContent.includes('+') || input.textContent.includes('-') || input.textContent.includes('x') || input.textContent.includes('÷')) {
        if (input.textContent.includes('+')) operator = '+';
        if (input.textContent.includes('-')) operator = '-';
        if (input.textContent.includes('x')) operator = 'x';
        if (input.textContent.includes('÷')) operator = '÷';
        [x, y] = input.textContent.split(operator)
        x = parseFloat(x);
        y = parseFloat(y);
        answer = Math.round(operate(x, y, operator) * 100) / 100;
        result.textContent = answer;
        x = answer;
        input.textContent = x;
        y = 0;

    }
    input.textContent += e.target.textContent
});
const times = document.querySelector('.times');     //minus selector
times.addEventListener('click', (e) => {           //minus event listener
    aa = '';
    if ((input.textContent.includes('+') || input.textContent.includes('-') || input.textContent.includes('x') || input.textContent.includes('÷')) && (input.textContent.indexOf('+') === input.textContent.length - 1 || input.textContent.indexOf('-') === input.textContent.length - 1 || input.textContent.indexOf('÷') === input.textContent.length - 1 || input.textContent.indexOf('x') === input.textContent.length - 1)) {
        return;
    } else if (input.textContent.includes('+') || input.textContent.includes('-') || input.textContent.includes('x') || input.textContent.includes('÷')) {
        if (input.textContent.includes('+')) operator = '+';
        if (input.textContent.includes('-')) operator = '-';
        if (input.textContent.includes('x')) operator = 'x';
        if (input.textContent.includes('÷')) operator = '÷';
        [x, y] = input.textContent.split(operator)
        x = parseFloat(x);
        y = parseFloat(y);
        answer = Math.round(operate(x, y, operator) * 100) / 100;
        result.textContent = answer;
        x = answer;
        input.textContent = x;
        y = 0;

    }
    input.textContent += e.target.textContent
});
const divide = document.querySelector('.divide');     //divide selector
divide.addEventListener('click', (e) => {           //divide event listener
    aa = '';
    if ((input.textContent.includes('+') || input.textContent.includes('-') || input.textContent.includes('x') || input.textContent.includes('÷')) && (input.textContent.indexOf('+') === input.textContent.length - 1 || input.textContent.indexOf('-') === input.textContent.length - 1 || input.textContent.indexOf('÷') === input.textContent.length - 1 || input.textContent.indexOf('x') === input.textContent.length - 1)) {
        return;
    } else if (input.textContent.includes('+') || input.textContent.includes('-') || input.textContent.includes('x') || input.textContent.includes('÷')) {
        if (input.textContent.includes('+')) operator = '+';
        if (input.textContent.includes('-')) operator = '-';
        if (input.textContent.includes('x')) operator = 'x';
        if (input.textContent.includes('÷')) operator = '÷';
        [x, y] = input.textContent.split(operator)
        x = parseFloat(x);
        y = parseFloat(y);
        answer = Math.round(operate(x, y, operator) * 100) / 100;
        result.textContent = answer;
        x = answer;
        input.textContent = x;
        y = 0;
    }
    input.textContent += e.target.textContent
});

function operate(x, y, operator) {
    if (operator === 'x') return multiply(x, y);
    if (operator === '÷') return division(x, y);
    if (operator === '-') return substract(x, y);
    if (operator === '+') return add(x, y);
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


