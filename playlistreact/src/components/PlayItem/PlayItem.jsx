import { useState, useCallback, useRef, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStop, faPause, faMinus } from '@fortawesome/free-solid-svg-icons';
import './PlayItem.css'
import { app } from '../../base';

const storageRef = app.storage().ref();

function PlayItem(props) {
    const audioMy = useRef();
    const stopBtn = useRef();

    const handleStatusChange = useCallback(() => {
        props.onChange(props.id, props.author, props.song, props.mp3, props.status);
        const songList = [...document.querySelectorAll("audio")];
        songList.map((list) => list.pause());
        if (props.status === 'stop') {
            songList.map((list) => list.pause());
            audioMy.current.play();
        } else {
            audioMy.current.pause();
        }
    }, [props]);
    const handleStop = useCallback(() => {
        props.onChange(props.id, props.author, props.song, props.mp3, 'play');
        audioMy.current.pause();
        audioMy.current.currentTime = 0;
    }, [props]);

    const deleteFromFirebase = useCallback(() => {
        const mp3Url = storageRef.child(`${app.auth().currentUser.uid}/` + props.mp3);
        mp3Url.delete()
            .then(() => {
                console.log("Deleted successfully!");
            })
            .catch((err) => {
                console.log(err);
            });
        app.database().ref('playlist').child(props.id).remove();
        props.onDelete(props.id);
    }, [props]);

    const [srcMp3, getSrc] = useState(props.mp3);

    useEffect(() => {
        const myRef = storageRef.child(`${app.auth().currentUser.uid}/` + props.mp3).getDownloadURL();
        myRef.then((url) => {
            getSrc(url);
        }, []);
    });

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="row">
            <div className={`song-item is-${props.status}`}>
                <div className="col-1   text-left">
                    <div className="status">
                        {(props.status === 'stop') ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
                    </div>
                </div>
                <div className="col-5 text-left">
                    <audio ref={audioMy} src={srcMp3} id={props.id} volume="0.1">
                    </audio>
                    <div className="song-item-name">
                        <span className="song-author">
                            {props.author}
                        </span>
                        <br />
                        <span className="song-title">
                            {props.song}
                        </span>
                    </div>
                </div>
                <div className="col-2 text-left">
                    <button className="sound-btn" onClick={handleStatusChange}>{(props.status === "stop") ? <FontAwesomeIcon icon={faPlay} /> : <FontAwesomeIcon icon={faPause} />}</button>
                </div>
                <div className="col-2 text-left">
                    {(props.status === 'play') ? (<button ref={stopBtn} className="sound-btn" id="stop" onClick={handleStop}><FontAwesomeIcon icon={faStop} /></button>) : null}
                </div>
                <div className="col-2 text-left">
                    <button className="sound-btn" onClick={handleShow}>
                        <FontAwesomeIcon icon={faMinus} />
                    </button>
                </div>
                <div>
                    <Modal
                        size="lg"
                        animation={false}
                        aria-labelledby="contained-modal-title-vcenter"
                        centered show={show} onHide={handleClose}
                        className="my-modal">
                        <Modal.Header closeButton className="my-modal-header">
                            <Modal.Title id="contained-modal-title-vcenter">Delete music track</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h5>You really want to delete the track: {props.author} {props.song}?</h5>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="info" onClick={deleteFromFirebase}>
                                Delete
                        </Button>
                            <Button variant="outline-info" onClick={handleClose}>
                                Cancel
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default PlayItem;