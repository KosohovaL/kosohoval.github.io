// Task1

const car = {
    manufacturer: "Volvo",
    model: "XC60",
    year: 2020,
    speed: 115,
};

console.log('Task1');

function showCar(car) {
    console.log(`Your car: ${car.manufacturer} model ${car.model}, ${car.year} year of release, average speed ${car.speed} km/h`);
}

showCar(car);

function findTime(car, distance) {
    let time = (distance / car.speed);
    if (time % 4 === 0) {
        return time = time + (time / 4 - 1);
    } else {
        time = time + Math.trunc(time / 4);
        return time.toFixed(2);
    }
}

console.log(`${car.manufacturer} ${car.model} overcome the distance 800km by time ${findTime(car, 920)}`);

// Task2

const fraction1 = {
    numerator: 10,
    denominator: 6,
};

const fraction2 = {
    numerator: 4,
    denominator: 6,
};

console.log('Task2');

function gcd(first, second) {
    while (first !== 0 && second !== 0) {
        if (first > second) {
            first = first % second;
        } else {
            second = second % first;
        }
    }
    return second + first;
}

function lcm(first, second) {
    return (first * second) / gcd(first, second);
}

function summaFraction(fraction1, fraction2) {
    const denominator = lcm(fraction1.denominator, fraction2.denominator);
    const numerator = fraction1.numerator * (denominator / fraction1.denominator) + fraction2.numerator * (denominator / fraction2.denominator);
    console.log(`${fraction1.numerator}/${fraction1.denominator} + ${fraction2.numerator}/${fraction2.denominator} = ${numerator}/${denominator}`);
}

summaFraction(fraction1, fraction2);

function subtractionFraction(fraction1, fraction2) {
    const denominator = lcm(fraction1.denominator, fraction2.denominator);
    const numerator = fraction1.numerator * (denominator / fraction1.denominator) - fraction2.numerator * (denominator / fraction2.denominator);
    console.log(`${fraction1.numerator}/${fraction1.denominator} - ${fraction2.numerator}/${fraction2.denominator} = ${numerator}/${denominator}`);
}

subtractionFraction(fraction1, fraction2);

function multiplicationFraction(fraction1, fraction2) {
    const numerator = fraction1.numerator * fraction2.numerator;
    const denominator = fraction1.denominator * fraction2.denominator;
    console.log(`${fraction1.numerator}/${fraction1.denominator} * ${fraction2.numerator}/${fraction2.denominator} = ${numerator}/${denominator}`);
}

multiplicationFraction(fraction1, fraction2);

function divisionFraction(fraction1, fraction2) {
    const numerator = fraction1.numerator * fraction2.denominator;
    const denominator = fraction1.denominator * fraction2.numerator;
    console.log(`${fraction1.numerator}/${fraction1.denominator} / ${fraction2.numerator}/${fraction2.denominator} = ${numerator}/${denominator}`);
}

divisionFraction(fraction1, fraction2);

function reducingFractions(fraction) {
    const numerator = fraction.numerator / gcd(fraction.numerator, fraction.denominator);
    const denominator = fraction.denominator / gcd(fraction.numerator, fraction.denominator);
    console.log(`${fraction.numerator}/${fraction.denominator} = ${numerator}/${denominator}`);
}

reducingFractions(fraction1);

// Task3

console.log('Task3');

const myTime = {
    hour: 15,
    minutes: 55,
    seconds: 45,
}

function showTime(time) {
    console.log(`Time:      ${time.hour}:${time.minutes}:${time.seconds}`);
}

showTime(myTime);

function addSeconds(time, hour, minutes, seconds) {
    let hoursNew = time.hour + hour;
    let minutesNew = time.minutes + minutes;
    let secondsNew = time.seconds + seconds;

    if (secondsNew > 60) {
        minutesNew = minutesNew + Math.trunc(secondsNew / 60);
        secondsNew = secondsNew - Math.trunc(secondsNew / 60) * 60;
    }
    if (secondsNew === 60) {
        minutesNew = minutesNew + 1;
        secondsNew = 0;
    }
    if (minutesNew > 60) {
        hoursNew = hoursNew + Math.trunc(minutesNew / 60);
        minutesNew = minutesNew - Math.trunc(minutesNew / 60) * 60;
    }
    if (minutesNew === 60) {
        hoursNew = hoursNew + 1;
        minutesNew = 0;
    }
    if (minutesNew < 10) {
        minutesNew = "0" + minutesNew;
    }
    if (secondsNew < 10) {
        secondsNew = "0" + secondsNew;
    }
    console.log(`Add time:   ${hour}:${minutes}:${seconds}`);
    console.log(`New time:  ${hoursNew}:${minutesNew}:${secondsNew}`);
}

addSeconds(myTime, 4, 55, 17);
