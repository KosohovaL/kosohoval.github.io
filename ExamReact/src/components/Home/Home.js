import { useState, useEffect } from 'react';
import { app } from '../../base';
import PlayList from '../PlayList/PlayList';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faCopyright, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import './Home.css';

function transformData(data) {
  return Object.keys(data).map((keyName) => {
    return {
      id: keyName,
      author: data[keyName].author,
      song: data[keyName].song,
      mp3: data[keyName].mp3,
      status: data[keyName].status,
      user: data[keyName].user
    }
  });
}

function Home() {
  // const [list, changeList] = useState([
  //   { id: "todo-0001", author: "Led Zeppelin", song: "Stairway To Heaven", mp3: "../mp3/audio1.mp3", status: "stop" },
  //   { id: "todo-0002", author: "Queen", song: "Bohemian Rhapsody", mp3: "../mp3/audio2.mp3", status: "stop" },
  //   { id: "todo-0003", author: "Lynyrd Skynyrd", song: "Free Bird", mp3: "../mp3/audio3.mp3", status: "stop" },
  //   { id: "todo-0004", author: "Deep Purple", song: "Smoke on the Water", mp3: "../mp3/audio4.mp3", status: "stop" },
  //   { id: "todo-0005", author: "Jimi Hendrix", song: "All Along The Watchtower", mp3: "../mp3/audio5.mp3", status: "stop" },
  //   { id: "todo-0006", author: "AC/DC", song: "Back In Black", mp3: "../mp3/audio6.mp3", status: "stop" },
  //   { id: "todo-0007", author: "Queen", song: "We Will Rock You ", mp3: "../mp3/audio7.mp3", status: "stop" },
  //   { id: "todo-0008", author: "Metallica", song: "Enter Sandman", mp3: "../mp3/audio8.mp3", status: "stop" },
  // ])

  const [list, changeList] = useState([]);

  useEffect(() => {
    fetch('https://playlistreact-default-rtdb.europe-west1.firebasedatabase.app/playlist.json')
      .then((resp) => resp.json())
      .then((data) => {
        changeList(transformData(data).filter(item => item.user === app.auth().currentUser.uid));
      })
  }, []);

  return (
    <div className="home">
      <Navbar bg="info" className="w-100 justify-content-between">
        <Navbar.Brand className="text-light" href="#home">
          <FontAwesomeIcon icon={faMusic} className="logo-icon mr-3" />
          Playlist React
        </Navbar.Brand>
        <Button variant="outline-light" className="btn-sign-out" onClick={() => app.auth().signOut()}>Sign out
          <FontAwesomeIcon icon={faSignOutAlt} className="logo-icon ml-3" />
        </Button>
      </Navbar>
      <PlayList list={list} onChange={changeList} />
      <Navbar bg="info" className="justify-content-end footer">
        <Navbar.Brand className="text-light" href="#home">
          <FontAwesomeIcon icon={faCopyright} className="logo-icon mr-3" />
        2021
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default Home;
