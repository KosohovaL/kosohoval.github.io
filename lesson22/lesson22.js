// Task1

const age = parseInt(
    prompt('Please enter your age'),
);

(age >= 60) ? console.log('Your age ', age, ' years - You are retired') :
    (age >= 18) ? console.log('Your age ', age, ' years - You are adult') :
        (age >= 12) ? console.log('Your age ', age, ' years - You are teenager') : console.log('Your age ', age, ' years - You are child');

// Task2

const numeric = parseInt(
    prompt('Please enter number from 0 to 9:'),
);

switch (numeric) {
    case 0: {
        console.log('Your symbol )');
    } break;
    case 1: {
        console.log('Your symbol !');
    } break;
    case 2: {
        console.log('Your symbol @');
    } break;
    case 3: {
        console.log('Your symbol #');
    } break;
    case 4: {
        console.log('Your symbol $');
    } break;
    case 5: {
        console.log('Your symbol %');
    } break;
    case 6: {
        console.log('Your symbol ^');
    } break;
    case 7: {
        console.log('Your symbol &');
    } break;
    case 8: {
        console.log('Your symbol *');
    } break;
    case 9: {
        console.log('Your symbol (');
    } break;
    default: {
        console.log('You must enter a number from 0 to 9!');
    }
}

// Task3

const threeDigit = prompt('Enter a three-digit number:');

(threeDigit[0] === threeDigit[1]) || (threeDigit[0] === threeDigit[2]) || (threeDigit[1] === threeDigit[2]) ? console.log(threeDigit, '- there are the same numbers!') : console.log(threeDigit, '- no two numbers are the same!');

// Task4

const year = parseInt(
    prompt('Please enter a year:'),
);

(year % 400 === 0) || ((year % 4 === 0) && !(year % 100 === 0))
    ? console.log(year + ' - a leap year!') : console.log(year + ' not a leap year!');

// Task5

const fiveDigit = prompt('Enter a five-digit number:');
const fiveDigit_1_2 = parseInt(
    (fiveDigit[0] + fiveDigit[1]),
);
const fiveDigit_5_4 = parseInt(
    (fiveDigit[4] + fiveDigit[3]),
);


(fiveDigit_1_2 === fiveDigit_5_4) ? console.log(fiveDigit, ' is polindrom') : console.log(fiveDigit, ' is not polindrom');


// Task6

const usd = parseInt(
    prompt('Indicate how many dollars you have'),
);

const convert = parseInt(
    prompt('Select the currency to which you want to convert: 1)EUR 2)UAH 3)AZN'),
);

let money = 0;

switch (convert) {
    case 1: {
        money = Math.floor(usd * 0.83 * 100) / 100;
        console.log(usd + 'USD - ' + money + 'EUR');
    } break;
    case 2: {
        money = Math.floor(usd * 27.85 * 100) / 100;
        console.log(usd + 'USD - ' + money + 'UAH');
    } break;
    case 3: {
        money = Math.floor(usd * 1.7 * 100) / 100;
        console.log(usd + 'USD - ' + money + 'AZN');
    } break;
    default: {
        console.log('You must specify the number 1 or 2 or 3!');
    }
}

// Task7

const purchase = parseInt(
    prompt('Enter the amount of your purchase'),
);
let discount = 0;
let payment = 0;

if (purchase >= 200 && purchase < 300) {
    discount = purchase * 0.03;
    payment = purchase - discount;
    console.log(`Your discount 3% - ${Math.floor(discount * 100) / 100}, pay: ${payment = purchase - discount}`);
} else if (purchase >= 300 && purchase < 500) {
    discount = purchase * 0.05;
    console.log(`Your discount 5% - ${Math.floor(discount * 100) / 100}, pay: ${payment = purchase - discount}`);
} else if (purchase >= 500) {
    discount = purchase * 0.07;
    console.log(`Your discount 7% - ${Math.floor(discount * 100) / 100}, pay: ${payment = purchase - discount}`);
} else {
    console.log('Add goods to the amount', 200 - purchase, 'and get a discount 3%!');
}

// Task8

const circle = parseInt(
    prompt('Enter the length of the circle'),
);
const perimeter = parseInt(
    prompt('Enter the length of the perimeter of the square'),
);

if (circle / Math.PI <= perimeter / 4) {
    console.log(`The circle of length ${circle} will fit in a square with a perimeter ${perimeter}`);
} else {
    console.log(`The circle of length ${circle} will not fit in a square with a perimeter ${perimeter}`);
}

// Task9

const answer1 = parseInt(
    prompt('Are Java and JavaScript the same? 1)Yes 2)No 3)I do not know'),
);
const answer2 = parseInt(
    prompt('First appeared JavaScript? 1)1995 2)2000 3)1994'),
);
const answer3 = parseInt(
    prompt('JavaScript designed by? 1)Bill Gates 2)Brendan Eich 3)Steve Jobs'),
);
let point = 0;

if (answer1 === 2) {
    point = point + 2;
}

if (answer2 === 1) {
    point = point + 2;
}

if (answer3 === 2) {
    point = point + 2;
}

switch (point) {
    case 6: {
        console.log(`You're great! All answers are correct. Your score is ${point} points`);
    } break;
    case 4: {
        console.log(`Good result! Two answers are correct. Repeat the theory! Your score is ${point} points`);
    } break;
    case 2: {
        console.log(`Not a bad result! One answer is correct. Repeat the theory! Your score is ${point} points`);
    } break;
    default: {
        console.log(`You didn't give any correct answers, but don't worry! Read the theory and everything will be fine!`);
    }
}

// Task10

const previousDay = parseInt(
    prompt('Enter day. Number 1-31'),
);
const previousMonth = parseInt(
    prompt('Enter month. Number 1-12'),
);
const previousYear = parseInt(
    prompt('Enter year.'),
);

let nextDay = 0;
let nextMonth = 0;
let nextYear = previousYear;
//)
switch (previousDay) {
    case 28: {
        if (previousMonth !== 2) {
            nextDay = previousDay + 1;
            nextMonth = previousMonth;
        } else {
            if ((previousYear % 400 === 0) || ((previousYear % 4 === 0) && !(previousYear % 100 === 0))) {
                nextDay = previousDay + 1;
                nextMonth = previousMonth;
            } else {
                nextDay = 1;
                nextMonth = previousMonth + 1;
            }
        }
    } break;
    case 29: {
        if (previousMonth === 2) {
            nextDay = 1;
            nextMonth = previousMonth + 1;
        } else {
            nextDay = previousDay + 1;
            nextMonth = previousMonth;
        }
    } break;
    case 30: {
        if ((previousMonth === 4) || (previousMonth === 6) || (previousMonth === 9) || (previousMonth === 11)) {
            nextDay = 1;
            nextMonth = previousMonth + 1;
        } else {
            nextDay = previousDay + 1;
            nextMonth = previousMonth;
        }
    } break;
    case 31: {
        if (previousMonth !== 12) {
            nextDay = 1;
            nextMonth = previousMonth + 1;
        } else {
            nextDay = 1;
            nextMonth = 1;
            nextYear = previousYear + 1;
        }
    } break;
    default: {
        nextDay = previousDay + 1;
        nextMonth = previousMonth;
    }
}
console.log(`Previous day ${previousDay}/${previousMonth}/${previousYear}`);
console.log(`Next day ${nextDay}/${nextMonth}/${nextYear}`);  