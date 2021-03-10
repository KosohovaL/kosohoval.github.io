const start = document.querySelector('#start');

// Task1
const task1Title = document.createElement('h2');
const myText = "Lorem ipsum dolor sit amet consectetur adipisicing elit.\nTotam modi nihil laudantium doloremque dolor, ad quae similique natus soluta recusandae quibusdam ratione, itaque, impedit voluptate?";
const textDiv = document.createElement('div');
const textArea = document.createElement('textarea');
const textHint = document.createElement('h4');

task1Title.innerText = 'Task1.\nEdit text';
start.append(task1Title);
textHint.innerText = 'Press Ctrl+E to edit the text.';
textDiv.innerText = myText;
textArea.value = myText;
start.append(textHint);
start.append(textDiv);
document.addEventListener('keydown', function (event) {
    if (event.code == 'KeyE' && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        textHint.innerText = 'Press Ctrl+S to save the text.'
        textArea.value = textDiv.innerText;
        textDiv.replaceWith(textArea);
    } if (event.code == 'KeyS' && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        textHint.innerText = 'Press Ctrl+E to edit the text.';
        textDiv.innerText = textArea.value;
        textArea.replaceWith(textDiv);
    }
})

// Task2

const myArray = [
    { id: 128, model: 'Audi', year: 1996, run: 20000 },
    { id: 124, model: 'Volvo', year: 2020, run: 100 },
    { id: 121, model: 'BMW', year: 2006, run: 15000 },
    { id: 126, model: 'Fiat', year: 2016, run: 2000 },
    { id: 127, model: 'Volvo', year: 1996, run: 4000 },
    { id: 122, model: 'BMW', year: 2020, run: 2050 },
    { id: 129, model: 'Skoda', year: 2010, run: 10000 },
]
const task2Title = document.createElement('h2');
const myTable = document.createElement('table');
let tr = document.createElement('tr');

task2Title.innerText = 'Task2.\nSort table';
start.append(task2Title);

function addHeaderTable(array) {
    for (let title in array[0]) {
        let th = document.createElement('th');
        th.append(title);
        tr.append(th);
        myTable.append(tr);
    };
    task2Title.after(myTable);
}

function addTable(myList) {
    myList.forEach(element => {
        let tr = document.createElement('tr');
        for (let key in element) {
            let td = document.createElement('td');
            td.append(element[key]);
            tr.append(td);
        }
        myTable.append(tr);
    });
    return myTable;
}

addHeaderTable(myArray);
start.append(addTable(myArray));


const myTh = document.querySelectorAll('th');
const tableMy = document.querySelector('table');


myTh.forEach(item => item.addEventListener('click', function () {
    if (item.textContent !== "model") {
        let sortedRows = Array.from(tableMy.rows).slice(1).
            sort((rowA, rowB) => (rowA.cells[item.cellIndex].innerHTML - rowB.cells[item.cellIndex].innerHTML));
        tableMy.append(...sortedRows);
    } else {
        let sortedRows = Array.from(tableMy.rows).slice(1).
            sort((rowA, rowB) => (rowA.cells[item.cellIndex].innerHTML > rowB.cells[item.cellIndex].innerHTML) ? 1 : -1);
        tableMy.append(...sortedRows);
    }
}
)
)

// Task3
const task3Title = document.createElement('h2');
const resizeDiv = document.querySelector('#resize');
const resizer = document.createElement('div');
let startX = 0;
let startWidth = 0;

task3Title.innerText = 'Task3.\nChange width DIV. Move the mouse pointer to the lower right corner';
start.append(task3Title);
resizeDiv.className = 'resizable';
resizer.className = 'resizer';
resizeDiv.appendChild(resizer);

resizer.addEventListener('mousedown', function initDrag(event) {
    startX = event.clientX;
    startWidth = resizeDiv.getBoundingClientRect().right;
    document.documentElement.addEventListener('mousemove', startDrag);
    document.documentElement.addEventListener('mouseup', stopDrag);
});

function startDrag(event) {
    resizeDiv.style.width = `${startWidth + event.clientX - startX}px`;
}

function stopDrag(event) {
    document.documentElement.removeEventListener('mousemove', startDrag);
    document.removeEventListener('mouseup', stopDrag);
}


