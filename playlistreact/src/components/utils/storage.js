import { app } from '../../base';

const storageRef = app.storage().ref();

function transformData(data) {
    return Object.keys(data).map((keyName) => {
        return {
            id: keyName,
            author: data[keyName].author,
            song: data[keyName].song,
            mp3: data[keyName].mp3,
            status: data[keyName].status
        }
    });
}

export function fileMp3(file) {
    const myRef = storageRef.child('mp3/' + file).getDownloadURL();
    myRef.then((url) => {
        console.log('url', url);
        // setFileURL(url.toString());
        // return url.toString();
        return url;
    })
}


// export function soundRead() {
//     return fetch('https://playlistreact-default-rtdb.europe-west1.firebasedatabase.app/playlist.json')
//         .then((resp) => resp.json())
//         .then((data) => {
//             console.log(transformData(data));
//             return transformData(data);
//         })
// }
