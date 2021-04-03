import { useCallback, useState } from 'react';
import Playlist from '../Playlist/Playlist'
import './App.css';

function changeStatus(currentStatus) {
  if (currentStatus === 'stop') {
    return 'play'
  } else {
    return 'stop'
  }
}

function App() {
  const [list, changeList] = useState([
    { id: "0001", author: "Led Zeppelin", song: "Stairway To Heaven", mp3: "../mp3/audio1.mp3", status: "stop" },
    { id: "0002", author: "Queen", song: "Bohemian Rhapsody", mp3: "../mp3/audio2.mp3", status: "stop" },
    { id: "0003", author: "Lynyrd Skynyrd", song: "Free Bird", mp3: "../mp3/audio3.mp3", status: "stop" },
    { id: "0004", author: "Deep Purple", song: "Smoke on the Water", mp3: "../mp3/audio4.mp3", status: "stop" },
    { id: "0005", author: "Jimi Hendrix", song: "All Along The Watchtower", mp3: "../mp3/audio5.mp3", status: "stop" },
    { id: "0006", author: "AC/DC", song: "Back In Black", mp3: "../mp3/audio6.mp3", status: "stop" },
    { id: "0007", author: "Queen", song: "We Will Rock You ", mp3: "../mp3/audio7.mp3", status: "stop" },
    { id: "0008", author: "Metallica", song: "Enter Sandman", mp3: "../mp3/audio8.mp3", status: "stop" }
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
          />
        )
      })}
    </div>
  );
}

export default App;
