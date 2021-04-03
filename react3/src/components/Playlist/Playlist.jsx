import { useState, useCallback } from 'react'
import './Playlist.css'

function Playlist(props) {
    const [isStop, changeStop] = useState(false);//////


    const handleStatusChange = useCallback(() => {
        props.onChange(props.id, props.author, props.song, props.mp3, props.status);
        const audio = document.getElementById(`${props.id}`);
        (props.status === 'stop') ? audio.play() : audio.pause();
        changeStop(!isStop);
    }, [props]);

    const handleStop = useCallback(() => {
        props.onChange(props.id, props.author, props.song, props.mp3, props.status);
        const audio = document.getElementById(`${props.id}`);
        audio.pause();
        audio.currentTime = 0;
        changeStop(!isStop);
    }, [props]);

    const handleDeleteSong = useCallback(() => {
        props.onDelete(props.id);
    }, [props]);
    return (
        <div className={`song-item is-${props.status}`}>
            <div>
                {props.status}
            </div>
            <audio src={props.mp3} id={props.id} volume="0.1">
            </audio>
            <div className="song-item-name">
                <span className="song-author">
                    {props.author}
                </span>
                <span className="song-title">
                    {props.song}
                </span>
            </div>
            <button className="sound-btn" onClick={handleStatusChange}>{(props.status === "stop") ? '►' : '❚❚'}</button>
            {isStop ? (<button className="sound-btn btn-stop" id="stop" onClick={handleStop}>■</button>) : null}
            {/* <button className="sound-btn btn-stop" id="stop" onClick={handleStatusChange}>■</button> */}
            <button className="sound-btn btn-dell" onClick={handleDeleteSong}>␡</button>
        </div>
    )
}

export default Playlist;