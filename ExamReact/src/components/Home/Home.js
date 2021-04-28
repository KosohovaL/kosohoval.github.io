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
