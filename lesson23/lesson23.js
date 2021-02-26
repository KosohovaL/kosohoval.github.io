// Task1

const beginRange = parseInt(
    prompt('Please enter begin range:'),
);
const endRange = parseInt(
    prompt('Please enter end range:'),
);

let sum = 0;
let i = beginRange;

while (i <= endRange) {
    sum = sum + i;
    i++;
}
console.log('<-----Task1----->');
console.log(`Sum all numbers from ${beginRange} to ${endRange} = ${sum}`);

// Task2

const firstNumber = parseInt(
    prompt('Enter the first number:'),
);
const secondNumber = parseInt(
    prompt('Enter the second number:'),
);

let first = firstNumber;
let second = secondNumber;

while (first !== 0 && second !== 0) {
    if (first > second) {
        first = first % second;
    } else {
        second = second % first;
    }
}
console.log('<-----Task2----->');
console.log(`The largest common divisor of numbers ${firstNumber} and ${secondNumber} = ${first + second}`);

// Task3

const number = parseInt(
    prompt('Task3. Enter number:'),
);

console.log('<-----Task3----->');
console.log('All divisors of number ', number);

for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        console.log(i);
    }
}

// Task4 

const numberLength = prompt('Task4. Enter number:');

console.log('<-----Task4----->');
console.log(`The number ${numberLength} consists of ${numberLength.length} digits`);

// Task5

let num = 0;
let numPos = 0;
let numNeg = 0;
let num_0 = 0;
let num_1 = 0;
let num_2 = 0;

console.log('<-----Task5----->');

for (let i = 1; i < 11; i++) {
    num = +(prompt('Enter number:'));
    console.log(num);
    if (num > 0) {
        numPos = numPos + 1;
    }
    if (num < 0) {
        numNeg = numNeg + 1;
    }
    if (num === 0) {
        num_0 = num_0 + 1;
    }
    if ((num % 2) === 0) {
        num_2 = num_2 + 1;
    } else {
        num_1 = num_1 + 1;
    }
}

console.log(`Positive: ${numPos}`);
console.log(`Negative: ${numNeg}`);
console.log(`Zero: ${num_0}`);
console.log(`Odd:  ${num_1}`);
console.log(`Even:  ${num_2}`);

// Task6

let conf = true;
let number_1 = 0;
let number_2 = 0;
let action = '+';
let result = 0;

do {
    number_1 = parseInt(
        prompt('Enter 1 number'),
    );
    number_2 = parseInt(
        prompt('Enter 2 number'),
    );
    action = prompt('Enter action (+ - * /)');
    switch (action) {
        case '+': {
            result = number_1 + number_2;
        } break;
        case '-': {
            result = number_1 - number_2;
        } break;
        case '*': {
            result = number_1 * number_2;
        } break;
        case '/': {
            result = number_1 / number_2;
        }
    }
} while (confirm(`${number_1}${action}${number_2}=${result}. Do you want to continue the calculation?`));

// Task7

const numberEdit = prompt('Task7. Enter number:');
const sumbol = parseInt(
    prompt('How many characters to shift?'),
);

if (sumbol <= numberEdit) {
    let numberEnd = numberEdit.substr(0, sumbol);
    let numberMy = numberEdit.substr(sumbol) + numberEnd;
    console.log(`Number ${numberEdit} shifted by ${sumbol} characters. Result ${numberMy}`);
} else {
    console.log('Error! characters>number!');
}

// Task8
let dayWeek = '';
let dayWeekNext = '';
let count = 1;

do {
    switch (count) {
        case 1: {
            dayWeek = 'Monday';
            dayWeekNext = 'Tuesday';
            count += 1;
        } break;
        case 2: {
            dayWeek = 'Tuesday';
            dayWeekNext = 'Wednesday';
            count += 1;
        } break;
        case 3: {
            dayWeek = 'Wednesday';
            dayWeekNext = 'Thursday';
            count += 1;
        } break;
        case 4: {
            dayWeek = 'Thursday';
            dayWeekNext = 'Friday';
            count += 1;
        } break;
        case 5: {
            dayWeek = 'Friday';
            dayWeekNext = 'Saturday';
            count += 1;
        } break;
        case 6: {
            dayWeek = 'Saturday';
            dayWeekNext = 'Sunday';
            count += 1;
        } break;
        case 7: {
            dayWeek = 'Sunday';
            dayWeekNext = 'Monday';
            count = 1;
        } break;
    }
} while (confirm(`${dayWeek} next ${dayWeekNext} \n Show next day of the week?`));

// Task9
console.log('<-----Task9----->');

for (let i = 2; i < 10; i++) {
    console.log(`Multiplication table ${i}`);
    for (let j = 1; j < 11; j++) {
        console.log(`${i}*${j}=${i * j}`);
    }
}

// Task10

let firstN = 0;
let lastN = 100;
let middleN = 0;
let resultN = 0;

alert(`Task10. Please. Guess the number from 0 to 100.`);

do {
    middleN = Math.round((firstN + lastN) / 2);
    resultN = parseInt(
        prompt(`Your number: 1) > ${middleN}; 2) < ${middleN}; 3) = ${middleN} `),
    );
    switch (resultN) {
        case 1: {
            firstN = middleN + 1;
        } break;
        case 2: {
            lastN = middleN - 1;
        }
    }
} while (resultN !== 3);