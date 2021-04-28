import React, { useState, useCallback } from 'react';
import Button from 'react-bootstrap/Button';
import PlayItem from '../PlayItem/PlayItem';
import SoundItemForm from '../SoundItemForm/SoundItemForm';
import { app } from '../../base';

function changeStatus(currentStatus) {
    if (currentStatus === 'stop') {
        return 'play'
    } else {
        return 'stop'
    }
}

function App(props) {
    const [isFormVisible, changeFormVisibility] = useState(false);
    const handleChange = useCallback((id, author, song, mp3, status) => {
        props.onChange((prevState) => {
            const newState = prevState.map((songItem) => {
                songItem.status = "stop";
                if (songItem.id === id) {
                    return {
                        id: id,
                        author: author,
                        song: song,
                        mp3: mp3,
                        status: changeStatus(status),
                    };
                }
                return songItem;
            });
            return newState;
        });
    }, [props]);

    const handleCreateSong = useCallback(() => {
        changeFormVisibility(true);
    }, []);

    const createNewSongItem = useCallback((author, song, mp3, status) => {
        fetch(
            'https://playlistreact-default-rtdb.europe-west1.firebasedatabase.app/playlist.json',
            {
                method: 'POST',
                body: JSON.stringify({
                    author: author,
                    song: song,
                    mp3: mp3,
                    status: 'stop',
                    user: app.auth().currentUser.uid
                })
            }
        )
            .then((resp) => resp.json())
            .then((data) => {
                props.onChange((prevState) => {
                    const newState = prevState.concat([{ id: data.name, author, song, mp3, status }]);
                    return newState;
                });
            }
            )
        changeFormVisibility(false);
    }, [props]);

    const handleDelete = useCallback((id) => {
        props.onChange((prevState) => {
            const newState = prevState.filter((songItem) => {
                return songItem.id !== id;
            });
            return newState;
        })
    }, [props]);

    const visibleForm = useCallback((visible) => {
        changeFormVisibility(visible);
    }, []);

    return (
        <div className="container-fluid">
            {props.list.map((songItem) => {
                return (
                    <PlayItem
                        key={songItem.id}
                        id={songItem.id}
                        author={songItem.author}
                        song={songItem.song}
                        mp3={songItem.mp3}
                        status={songItem.status}
                        onChange={handleChange}
                        onDelete={handleDelete}
                    />
                );
            })}
            <div className="text-center">
                <Button variant="outline-info mt-3 mb-3" onClick={handleCreateSong}>New 🎶</Button>
            </div>
            {isFormVisible ? (<SoundItemForm onSave={createNewSongItem} onVisible={visibleForm} />) : null}
        </div>
    )
}

export default App;