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
        props.onSave(author, song, mp3, status);
    }, [author, song, mp3, status, props]);
    return (
        <form className="sound-item-form" onSubmit={handleSubmit}>
            {/* <div>
                <label htmlFor="state">State</label>
                <select name="state" id="state">
                    <option value="stop">Stop</option>
                    <option value="play">Play</option>
                </select>
            </div> */}
            <div className="form-item">
                <label className="form-label" htmlFor="author">Author</label>
                <input
                    className="form-control"
                    type="text"
                    name="author"
                    id="author"
                    onChange={(event) => setAuthor(event.target.value)}
                />
            </div>
            <div className="form-item">
                <label className="form-label" htmlFor="song">Song</label>
                <input
                    className="form-control"
                    type="text"
                    name="song"
                    id="song"
                    onChange={(event) => setSong(event.target.value)}
                />
            </div>
            <div className="form-item">
                <label className="form-label" htmlFor="mp3">Mp3</label>
                <input
                    className="form-control"
                    type="text"
                    name="mp3"
                    id="mp3"
                    onChange={(event) => setMp3(event.target.value)}
                />
            </div>
            <div className="centered">
                <Button type="submit" variant="outline-info mb-2">Add 🎶</Button>
            </div>
        </form>
    );
}

export default SoundItemForm;