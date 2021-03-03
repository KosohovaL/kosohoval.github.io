// Task1

const shoppingList = [
    { product: "bread", quantity: 1, buy: false, },
    { product: "cheese", quantity: 4, buy: true, },
    { product: "sausage", quantity: 2, buy: false, },
    { product: "potato", quantity: 5, buy: false, },
    { product: "juice", quantity: 3, buy: true, },
    { product: "yogurt", quantity: 5, buy: false, },
    { product: "flour", quantity: 2, buy: true, },
    { product: "milk", quantity: 2, buy: false, },
    { product: "pineapple", quantity: 1, buy: true, },
];

const newItem1 = { product: "chocolate", quantity: 5, buy: false, };
const newItem2 = { product: "milk", quantity: 2, buy: false, };
const newItem3 = { product: "milk", quantity: 2, buy: false, };

function printShoppingList(shoppingList) {
    console.log('<---Shopping list:--->');
    shoppingList.forEach(element => console.log(`${element.product} ${element.quantity} buy: ${element.buy}`));
    console.log('\n');
};

printShoppingList(shoppingList);

shoppingList.sort(function (listItem1, listItem2) {
    return (listItem1.buy) ? 1 : -1;
});

printShoppingList(shoppingList);

function addItem(shoppingList, newItem) {
    const result = shoppingList.find(list => list.product === newItem.product);
    (result) ? result.quantity = result.quantity + newItem.quantity : shoppingList.push(newItem);
};

addItem(shoppingList, newItem1);
addItem(shoppingList, newItem2);

printShoppingList(shoppingList);

function itemBuy(shoppingList, item) {
    const result = shoppingList.find(list => list.product === item.product);
    result.buy = true;
}

itemBuy(shoppingList, newItem3);

printShoppingList(shoppingList);

// Task2

const cashiersCheck = [
    { product: "bread", quantity: 3, price: 3.45, },
    { product: "cheese", quantity: 3, price: 35, },
    { product: "sausage", quantity: 1, price: 99, },
    { product: "potato", quantity: 3, price: 25, },
    { product: "juice", quantity: 3, price: 33, },
    { product: "yogurt", quantity: 5, price: 20, },
    { product: "flour", quantity: 2, price: 35, },
    { product: "milk", quantity: 4, price: 30, },
    { product: "pineapple", quantity: 1, price: 75, },
];

function printCashiersCheck(cashiersCheck) {
    console.log('<---Cashier check:--->');
    cashiersCheck.forEach(element => console.log(`${element.product} ${element.quantity} pc. price: ${element.price} UAH`));
    console.log('\n');
};

printCashiersCheck(cashiersCheck);

function calculatePriceSum(sum, check) {
    const result = sum + check.quantity * check.price;
    return result;
}

const totalPrice = cashiersCheck.reduce(calculatePriceSum, 0);

console.log(`Total price: ${totalPrice}`);

const maxPrice = cashiersCheck.reduce((prev, current, index) => prev.price * prev.quantity > current.price * current.quantity ? prev : current);

console.log(`\nThe most expensive purchase ${maxPrice.product}: \n ${maxPrice.quantity} pc. * ${maxPrice.price} UAH = ${maxPrice.quantity * maxPrice.price} UAH`);

const averageCost = (totalPrice / cashiersCheck.length).toFixed(2);

console.log(`\nThe average cost of one product in the check: ${averageCost} UAH`);

// Task3

const arrayCss = [
    { "margin": "20px" },
    { "padding": "10px" },
    { "border": "2px solid powderblue" },
    { "color": "blue" },
    { "font-family": "Roboto" },
    { "font-size": "14px" },
    { "font-style": "italic" },
    { "font-weight": "bold" },
    { "text-align": "center" },
    { "text-decoration": "none" },
    { "text-transform": "capitalize" },
    { "line-height": "2px" },
];

function textStyle(array, text) {
    let css = "";
    const toString = arrayCss.forEach(element => {
        for (let key in element) {
            css = css + `${key}: ${element[key]}; `;
        };
    },
    );
    console.log(`\n<p style="${css}">${text}</p>`)
};

const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

textStyle(arrayCss, text);

// Task4

const classroom = [
    { name: "101", seat: 10, faculty: "historical" },
    { name: "304", seat: 19, faculty: "economical" },
    { name: "102", seat: 18, faculty: "natural" },
    { name: "103", seat: 20, faculty: "architectural" },
    { name: "202", seat: 14, faculty: "natural" },
    { name: "306", seat: 17, faculty: "informative" },
    { name: "104", seat: 16, faculty: "economical" },
    { name: "105", seat: 11, faculty: "informative" },
    { name: "203", seat: 10, faculty: "architectural" },
    { name: "305", seat: 20, faculty: "informative" },
];

const studentsGroup = {
    name: "101I",
    quantity: 12,
    faculty: "informative",
};

function printClassroom(classroom) {
    console.log('\n<---Classroom:--->');
    classroom.forEach(element => console.log(`${element.name} ${element.seat} seat, faculty: ${element.faculty}`));
    console.log('\n');
};

printClassroom(classroom);

function printClassroomForFaculty(classroom, faculty) {
    console.log(`Faculty: ${faculty}`);
    classroom.forEach(element => {
        if (element.faculty === faculty) {
            console.log(`Classroom ${element.name}, ${element.seat} seat`);
        };
    });
};

const faculty = "informative";

printClassroomForFaculty(classroom, faculty);

function printClassroomForGroup(classroom, studentsGroup) {
    console.log(`\nClassroom for group ${studentsGroup.name} (${studentsGroup.quantity} students)`);
    classroom.forEach(element => {
        if (element.faculty === studentsGroup.faculty && studentsGroup.quantity <= element.seat) {
            console.log(`Classroom ${element.name}, ${element.seat} seat`);
        };
    });
};

printClassroomForGroup(classroom, studentsGroup);

function sortClassroom(classroom, key) {
    classroom.sort(function (listItem1, listItem2) {
        if (listItem1[key] < listItem2[key]) {
            return -1;
        } else if (listItem1[key] > listItem2[key]) {
            return 1;
        } else {
            return 0;
        }
    });
};

sortClassroom(classroom, "seat");
printClassroom(classroom);

sortClassroom(classroom, "name");
printClassroom(classroom);