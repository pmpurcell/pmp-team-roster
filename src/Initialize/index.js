import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { useHistory } from 'react-router-dom';
import SignIn from '../views/SignIn';
import Nav from '../Components/Nav';
import Routes from '../routes';
import { getPlayers } from '../api/data/playerData';

function Initialize() {
  const [user, setUser] = useState(null);
  const [playerRoster, setPlayerRoster] = useState([]);
  const [editItem, setEditItem] = useState({});
  const history = useHistory();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          profileImage: authed.photoUrl,
          uid: authed.uid,
        };
        setUser(userInfoObj);
        getPlayers().then(setPlayerRoster);
        history.push('/teams');
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <>
      {user ? (
        <>
          <div className="App">
            <h2>TEAM NAME</h2>
            <div>
              <Nav />
              <Routes players={playerRoster} setPlayerRoster={setPlayerRoster} editItem={editItem} setEditItem={setEditItem} />
            </div>
          </div>
        </>
      ) : (
        <SignIn />
      ) }
    </>
  );
}

export default Initialize;
