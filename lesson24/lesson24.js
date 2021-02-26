// Task1

function compareNumbers(a, b) {
    if (a < b) {
        return -1;
    };
    if (a > b) {
        return 1;
    };
    if (a === b) {
        return 0;
    }
}

console.log(`Task1. Result: ${compareNumbers(10, 7)}`);

// Task2

function getFactorial(n) {
    return (n > 1) ? n * getFactorial(n - 1) : 1;
}

console.log(`Task2. Result: ${getFactorial(10)}`);

// Task3

function digitsNumbers(a, b, c) {
    return parseInt(
        String(a) + String(b) + String(c),
    );
}

console.log(`Task3. Result: ${digitsNumbers(4, 1, 2)}`);


// Task4

function getSquare(a, b = a) {
    if (a < 0 || b < 0) return 0;
    return (a * b);
}

console.log(`Task4. Result: ${getSquare(5)}`);

// Task5

function getIdealNumber(a) {
    let sum = 1;
    for (let i = 2; i < (Math.round(a / 2) + 1); i++) {
        if (a % i === 0) {
            sum = sum + i;
        }
    }
    return (sum === a) ? true : false;
}

console.log(`Task5. ${getIdealNumber(8128)}`);

// Task6
console.log(`Task6.`);
function getAllIdealNumber(a, b) {
    for (let i = a; i < b + 1; i++) {
        if (getIdealNumber(i) === true) {
            console.log(i);
        }
    }
}

getAllIdealNumber(3, 9000);

// Task7

function getTime(h, m = '00', s = '00') {
    if ((h < 10) || (h === 0)) {
        h = '0' + h;
    }
    if ((m > 0 & m < 10) || (m === 0)) {
        m = '0' + m;
    }
    if ((s > 0 & s < 10) || (s === 0)) {
        s = '0' + s;
    }
    return (h + ':' + m + ':' + s);
}

console.log(`Task7. ${getTime(12, 0, 4)}`);

// Task8

function timeToSecond(h, m, s) {
    return (parseInt(h) * 3600 + parseInt(m) * 60 + parseInt(s));
}

console.log(`Task8. ${timeToSecond(20, 20, 20)}`);

// Task9

function secondToHours(s) {
    const hours = Math.trunc(s / 3600);
    const minutes = Math.trunc((s - hours * 3600) / 60);
    const second = s - hours * 3600 - minutes * 60;
    return getTime(hours, minutes, second);
}

console.log(`Task9. ${secondToHours(361)}`);

// Task10
function getDifferenceDate(h1, m1, s1, h2, m2, s2) {
    const differenceDate = timeToSecond(h1, m1, s1) - timeToSecond(h2, m2, s2);
    return secondToHours(differenceDate);
}

console.log(`Task10. ${getDifferenceDate(7, 4, 20, 3, 10, 10)}`);