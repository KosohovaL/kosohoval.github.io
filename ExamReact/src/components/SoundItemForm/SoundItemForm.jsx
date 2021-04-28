import { useState, useCallback } from 'react';
import { app } from '../../base';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar'
import './SoundItemForm.css'

const storageRef = app.storage().ref();

const SoundItemForm = (props) => {
    const [author, setAuthor] = useState('');
    const [song, setSong] = useState('');
    const [mp3, setMp3] = useState('');
    const [status, setStatus] = useState('stop');
    const [percentRange, setProgress] = useState(0);
    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        setStatus('stop');
        const file = document.querySelector('input[type="file"]').files[0];
        const fileRef = storageRef.child(`${app.auth().currentUser.uid}`).child(file.name);
        const uploadTask = fileRef.put(file);
        uploadTask.on('state_changed', snapshot => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            if (progress <= 100) {
                setProgress(Math.round(progress));
            }
        })
        fileRef.put(file).then(() => {
            console.log("Uploaded a file");
            props.onSave(author, song, mp3, status);
        })
    }, [author, song, mp3, status, props]);

    const visibleForm = () => {
        props.onVisible(false);
    };

    return (
        <div>
            <form className="sound-item-form" onSubmit={handleSubmit}>
                <div className="row mt-2">
                    <div className="col-3   text-left">
                        <label className="form-label" htmlFor="author">Author</label>
                    </div>
                    <div className="col-9   text-right">
                        <input
                            className="form-control my-input"
                            type="text"
                            name="author"
                            id="author"
                            required
                            onChange={(event) => setAuthor(event.target.value)}
                        />
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-3   text-left">
                        <label className="form-label" htmlFor="song">Song</label>
                    </div>
                    <div className="col-9   text-right">
                        <input
                            className="form-control my-input"
                            type="text"
                            name="song"
                            id="song"
                            required
                            onChange={(event) => setSong(event.target.value)}
                        />
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-3 text-left">
                        <label className="form-label" htmlFor="mp3">Mp3</label>
                    </div>
                    <div className="col-9 text-right">
                        <input
                            className="form-control-file"
                            type="file"
                            name="mp3"
                            id="mp3"
                            accept="audio/*"
                            required
                            onChange={(event) => setMp3(event.target.files[0].name)}
                        />
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-3 text-left">
                        <label className="form-label" htmlFor="progress"></label>
                    </div>
                    <div className="col-5 text-right">
                        <ProgressBar striped variant="info" now={percentRange} label={`${percentRange}%`} name="progress" />
                    </div>
                </div>
                <div className="text-center">
                    <Button type="submit" variant="outline-info mb-2 mt-3">Add 🎶</Button>
                    <Button type="button" variant="outline-info mb-2 mt-3 ml-2" onClick={visibleForm}>Cancel 🎶</Button>
                </div>
            </form>
        </div>
    );
}

export default SoundItemForm;