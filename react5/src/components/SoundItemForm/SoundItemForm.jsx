import { useState, useCallback } from 'react';
import Button from 'react-bootstrap/Button';
import './SoundItemForm.css'

const SoundItemForm = (props) => {
    const [author, setAuthor] = useState('');
    const [song, setSong] = useState('');
    const [mp3, setMp3] = useState('');
    const [status, setStatus] = useState('stop');
    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        setStatus('stop');
        const formData = new FormData();
        const fileField = document.querySelector('input[type="file"]');
        formData.append('mp3', fileField.files[0]);
        console.log(fileField.files[0]);
        fetch("../mp3/", {
            method: 'PUT',
            body: formData
        })
            .then(function (res) {
                if (res.ok) {
                    alert("Perfect! ");
                } else if (res.status === 401) {
                    alert("Oops! ");
                }
            }, function (e) {
                alert("Error submitting form!");
            });

        props.onSave(author, song, mp3, status);
    }, [author, song, mp3, status, props]);

    const visibleForm = () => {
        props.onVisible(false);
    };
    return (
        <form enctype="multipart/form-data" method="post" className="sound-item-form" onSubmit={handleSubmit}>
            <div className="row mt-2">
                <div className="col-2   text-left">
                    <label className="form-label" htmlFor="author">Author</label>
                </div>
                <div className="col-10   text-right">
                    <input
                        className="form-control"
                        type="text"
                        name="author"
                        id="author"
                        required
                        onChange={(event) => setAuthor(event.target.value)}
                    />
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-2   text-left">
                    <label className="form-label" htmlFor="song">Song</label>
                </div>
                <div className="col-10   text-right">
                    <input
                        className="form-control"
                        type="text"
                        name="song"
                        id="song"
                        required
                        onChange={(event) => setSong(event.target.value)}
                    />
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-2   text-left">
                    <label className="form-label" htmlFor="mp3">Mp3</label>
                </div>
                <div className="col-10   text-right">
                    <input
                        className="form-control"
                        type="file"
                        name="mp3"
                        id="mp3"
                        accept="audio/*"
                        required
                        onChange={(event) => setMp3(`../mp3/${event.target.files[0].name}`)}
                    // setMp3(event.target.value)
                    />
                </div>
            </div>
            <div className="text-center">
                <Button type="submit" variant="outline-info mb-2 mt-3">Add 🎶</Button>
                <Button type="button" variant="outline-info mb-2 mt-3 ml-5" onClick={visibleForm}>Cancel 🎶</Button>
            </div>
        </form >
    );
}

export default SoundItemForm;