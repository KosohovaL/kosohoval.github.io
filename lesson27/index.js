// Task1

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    calcLength() {
        return (this.diameter * Math.PI).toFixed(2);
    }

    get radius() {
        return this.defaultRadius;
    }

    get diameter() {
        return this.defaultRadius * 2;
    }

    get area() {
        return (Math.pow(this.radius, 2) * Math.PI).toFixed(2);
    }

    get length() {
        return this.calcLength();
    }

    set radius(radius) {
        this.defaultRadius = radius;
    }
}

const myCircle = new Circle(5);

console.log(`Task1`);
console.log(`Circle radius: ${myCircle.radius} cm`);
myCircle.radius = 14;
console.log(`Circle radius: ${myCircle.radius} cm`);
myCircle.diameter;
console.log(`Circle diameter: ${myCircle.diameter} cm`);
console.log(`Circle area: ${myCircle.area} cm2`);
console.log(`Circle length: ${myCircle.length} cm`);

// Task2


class Marker {
    constructor(color, inkAmount) {
        this.color = color;
        this.inkAmount = inkAmount;
    }

    print(text) {
        for (let char of text) {
            if (char !== " ") {
                if (this.inkAmount >= 0.05) {
                    console.log(char);
                    this.inkAmount = this.inkAmount - 0.05;
                    console.log(this.inkAmount.toFixed(2));
                } else {
                    console.log('Printing stopped! Out of ink!');
                    break;
                }
            }
        }
    }

    get color() {
        return this.myColor;
    }

    get inkAmount() {
        return this.myInkAmount;
    }

    set color(color) {
        this.myColor = color;
    }

    set inkAmount(inkAmount) {
        this.myInkAmount = inkAmount;
    }
}

const myMarker = new Marker("blue", 0.3);
console.log(`\nTask2`);
console.log(`Marker color ${myMarker.color}, amount ${myMarker.inkAmount}%`);
myMarker.print("Hello Lesya. How are you doing? Hello! I'm ok!");

class MarkerRefill extends Marker {
    refill() {
        console.log(`Initial ink level: ${this.inkAmount}`);
        if (this.inkAmount < 100) {
            this.inkAmount = 100;
            console.log(`Marker was refueled! Ink lavel: ${this.inkAmount}%`);
        } else
            console.log(`Marker filled! Ink lavel: ${this.inkAmount}%`);
    }
}

const myMarkerRefill = new MarkerRefill("red", 90);
myMarkerRefill.refill();

// Task3

class Employee {
    constructor(id, surname, name, department) {
        this.id = id;
        this.surname = surname;
        this.name = name;
        this.department = department;
    }
}

console.log('\nTask3')

const bankEmployee = [
    new Employee(123431, 'Petrenko', 'Ivan', 'security'),
    new Employee(123432, 'Dmitrenko', 'Roman', 'IT'),
    new Employee(123433, 'Ivanenko', 'Semen', 'economist'),
]

class EmployeeTable {
    constructor(array) {
        this.array = array;
    }

    getHtml() {
        const htmlArray = this.array;
        console.log('<table style="width: 100%; border: 2px solid #1d06cc; border-collapse: collapse; text-align: left; padding: 5px;">\n<tr style="border: 2px solid #1d06cc; text-align: center; padding: 5px; color: #1d06cc">\n<th>Id</th>\n<th>Surname</th>\n<th>Name</th>\n<th>Unit</th>\n</tr>');
        for (let i in htmlArray) {
            console.log(`<tr>`);
            let item = 0;
            for (let j in htmlArray[i]) {
                console.log(`<td>${htmlArray[i][j]}</td>`);
                item++;
                if (item === 4) {
                    console.log('</tr>');
                }
            }
        }
        console.log('</table>');
    }
}

const myTable = new EmployeeTable(bankEmployee);
myTable.getHtml();