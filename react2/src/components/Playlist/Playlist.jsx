import { useCallback } from 'react'
import './Playlist.css'

function Playlist(props) {
    const handleStatusChange = useCallback(() => {
        props.onChange(props.id, props.author, props.song, props.mp3, props.status);
        const audio = document.getElementById(`${props.id}`);
        (props.status === 'stop') ? audio.play() : audio.pause();
    }, [props.id, props.author, props.song, props.mp3, props.status])
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
            <button onClick={handleStatusChange}>{(props.status === "stop") ? '►' : '❚❚'}</button>
        </div>
    )
}

export default Playlist;