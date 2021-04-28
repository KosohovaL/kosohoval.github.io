import { useCallback, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faCopyright } from '@fortawesome/free-solid-svg-icons';
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
  }, []);

  const handleCreateSong = useCallback(() => {
    changeFormVisibility(!isFormVisible);
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

  const visibleForm = useCallback((visible) => {
    changeFormVisibility(visible);
  }, []);

  return (
    <div className="App">
      <Navbar bg="info">
        <Navbar.Brand className="text-light" href="#home">
          <FontAwesomeIcon icon={faMusic} className="logo-icon mr-3" />
        Audio list
        </Navbar.Brand>
      </Navbar>
      <div className="container-fluid">
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
        <div className="text-center">
          <Button variant="outline-info mb-3" onClick={handleCreateSong}>New 🎶</Button>
        </div>
        {isFormVisible ? (<SoundItemForm onSave={createNewSongItem} onVisible={visibleForm} />) : null}
      </div>
      <Navbar bg="info" className="justify-content-end footer">
        <Navbar.Brand className="text-light" href="#home">
          <FontAwesomeIcon icon={faCopyright} className="logo-icon mr-3" />
        2021
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default App;
