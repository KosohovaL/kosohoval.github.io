// Task1

let playList = [
    { author: "Led Zeppelin", song: "Stairway To Heaven", mp3: "audio1.mp3" },
    { author: "Queen", song: "Bohemian Rhapsody", mp3: "audio2.mp3" },
    { author: "Lynyrd Skynyrd", song: "Free Bird", mp3: "audio3.mp3" },
    { author: "Deep Purple", song: "Smoke on the Water", mp3: "audio4.mp3" },
    { author: "Jimi Hendrix", song: "All Along The Watchtower", mp3: "audio5.mp3" },
    { author: "AC/DC", song: "Back In Black", mp3: "audio6.mp3" },
    { author: "Queen", song: "We Will Rock You ", mp3: "audio7.mp3" },
    { author: "Metallica", song: "Enter Sandman", mp3: "audio8.mp3" }
];

let ol = document.createElement('ol');

function getSongList(myList) {
    myList.forEach(element => {
        let li = document.createElement('li');
        let audio = document.createElement('audio');
        audio.controls = true;
        audio.src = (`${element.mp3}`);
        audio.volume = 0.1;
        li.append(`${element.author} - ${element.song}`);
        li.append(audio);
        ol.append(li);
    });
    return ol;
}

document.getElementById('listTitle').append(getSongList(playList));

// Task2

const openBtn = document.getElementById('modalOpen');
const modalWindow = document.getElementById('myModal');
const closeBtn = document.getElementById('closeBtn');

openBtn.onclick = function () {
    modalWindow.style.display = 'block';
}

closeBtn.onclick = function () {
    modalWindow.style.display = 'none';
}

window.onclick = function (event) {
    if (event.target == modalWindow) {
        modalWindow.style.display = 'none';
    }
}

// Task3

const trafficLights = [
    { id: "lights1", color: "red" },
    { id: "lights2", color: "yellow" },
    { id: "lights3", color: "green" },
]
const lightsRed = document.getElementById('lights1');
const lightYellow = document.getElementById('lights2');
const lightGreen = document.getElementById('lights3');
const trafficBtn = document.getElementById('trafficBtn');
let activeItem = 2;

function setLights(list, item) {
    lightsRed.style.fill = '#ffffff';
    lightYellow.style.fill = '#ffffff';
    lightGreen.style.fill = '#ffffff';
    let myColor = document.getElementById(list[item].id);
    myColor.style.fill = list[item].color;
}

setLights(trafficLights, activeItem);

trafficBtn.onclick = function () {
    if (activeItem === 0) {
        activeItem = 2;
        setLights(trafficLights, activeItem);
    } else {
        activeItem--;
        setLights(trafficLights, activeItem);
    }
}
