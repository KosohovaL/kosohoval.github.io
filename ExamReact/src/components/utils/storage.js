import { app } from '../../base';

const storageRef = app.storage().ref();

export function fileMp3(file) {
    const myRef = storageRef.child('mp3/' + file).getDownloadURL();
    myRef.then((url) => {
        console.log('url', url);
        return url;
    })
}
