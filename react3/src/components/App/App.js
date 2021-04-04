import { useCallback, useState } from 'react';
import Playlist from '../Playlist/Playlist';
import SoundItemForm from '../SoundItemForm/SoundItemForm';

import './App.css';

function changeStatus(currentStatus) {
  if (currentStatus === 'stop') {
    return 'play'
  } else {
    return 'stop'
  }
}

function generateId() {
  return `todo-${Math.random().toString(36).substr(2, 9)}`;
}
function App() {
  const [isFormVisible, changeFormVisibility] = useState(false);
  const [list, changeList] = useState([
    { id: "todo-0001", author: "Led Zeppelin", song: "Stairway To Heaven", mp3: "../mp3/audio1.mp3", status: "stop" },
    { id: "todo-0002", author: "Queen", song: "Bohemian Rhapsody", mp3: "../mp3/audio2.mp3", status: "stop" },
    { id: "todo-0003", author: "Lynyrd Skynyrd", song: "Free Bird", mp3: "../mp3/audio3.mp3", status: "stop" },
    { id: "todo-0004", author: "Deep Purple", song: "Smoke on the Water", mp3: "../mp3/audio4.mp3", status: "stop" },
    { id: "todo-0005", author: "Jimi Hendrix", song: "All Along The Watchtower", mp3: "../mp3/audio5.mp3", status: "stop" },
    { id: "todo-0006", author: "AC/DC", song: "Back In Black", mp3: "../mp3/audio6.mp3", status: "stop" },
    { id: "todo-0007", author: "Queen", song: "We Will Rock You ", mp3: "../mp3/audio7.mp3", status: "stop" },
    { id: "todo-0008", author: "Metallica", song: "Enter Sandman", mp3: "../mp3/audio8.mp3", status: "stop" }
  ])

  const handleChange = useCallback((id, author, song, mp3, status) => {
    changeList((prevState) => {
      const newState = prevState.map((songItem) => {
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
  }, []);

  const handleCreateSong = useCallback(() => {
    changeFormVisibility(true);
  }, []);

  const createNewSongItem = useCallback((author, song, mp3, status) => {
    changeList((prevState) => {
      const newState = prevState.concat([{ id: generateId(), author, song, mp3, status }]);
      return newState;
    });
    changeFormVisibility(false);
  }, []);

  const handleDelete = useCallback((id) => {
    changeList((prevState) => {
      const newState = prevState.filter((songItem) => {
        return songItem.id !== id;
      });
      return newState;
    })
  }, []);

  return (
    <div className="App">
      <h1>Song list</h1>
      {list.map((songList) => {
        return (
          <Playlist
            key={songList.id}
            id={songList.id}
            author={songList.author}
            song={songList.song}
            mp3={songList.mp3}
            status={songList.status}
            onChange={handleChange}
            onDelete={handleDelete}
          />
        )
      })}
      <div className="centered">
        <button className="btn-form" onClick={handleCreateSong}>New 🎶</button>
      </div>
      {isFormVisible ? (<SoundItemForm onSave={createNewSongItem} />) : null}
    </div>
  );
}

export default App;
