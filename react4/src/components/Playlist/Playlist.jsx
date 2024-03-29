import { useState, useCallback, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStop, faPause, faMinus } from '@fortawesome/free-solid-svg-icons';
import './Playlist.css'
import { render } from '@testing-library/react';

function Playlist(props) {
    const audioMy = useRef();
    const [isStop, changeStop] = useState(false);
    const songList = [...document.querySelectorAll("audio")];
    const handleStatusChange = useCallback(() => {
        props.onChange(props.id, props.author, props.song, props.mp3, props.status);
        songList.map((list) => list.pause());
        if (props.status === 'stop') {
            songList.map((list) => list.pause());
            audioMy.current.play();
            changeStop(true);
        } else {
            audioMy.current.pause();
            changeStop(false);
        }
    }, [props]);
    const handleStop = useCallback(() => {
        props.onChange(props.id, props.author, props.song, props.mp3, 'play');
        audioMy.current.pause();
        audioMy.current.currentTime = 0;
        changeStop(false);
    }, [props]);

    const handleDeleteSong = useCallback(() => {
        props.onDelete(props.id);
    }, [props]);
    return (
        <div className={`song-item is-${props.status}`}>
            <div className="status">
                {(props.status == 'stop') ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
            </div>
            <audio ref={audioMy} src={props.mp3} id={props.id} volume="0.1">
            </audio>
            <div className="song-item-name">
                <span className="song-author">
                    {props.author}
                </span>
                <span className="song-title">
                    {props.song}
                </span>
            </div>
            <button className="sound-btn" onClick={handleStatusChange}>{(props.status === "stop") ? <FontAwesomeIcon icon={faPlay} /> : <FontAwesomeIcon icon={faPause} />}</button>
            {/* {isStop ? (<button className="sound-btn" id="stop" onClick={handleStop}><FontAwesomeIcon icon={faStop} /></button>) : null} */}
            <button className="sound-btn" onClick={handleDeleteSong}>
                <FontAwesomeIcon icon={faMinus} />
            </button>
        </div>
    )
}

export default Playlist;