import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import SignIn from '../views/SignIn';
import Nav from '../Components/Nav';
import Routes from '../routes';
import { getPlayers } from '../api/data/playerData';

function Initialize() {
  const [user, setUser] = useState(null);
  const [playerRoster, setPlayerRoster] = useState([]);
  const [editItem, setEditItem] = useState({});

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          profileImage: authed.photoUrl,
          uid: authed.uid,
        };
        setUser(userInfoObj);
        getPlayers(userInfoObj.uid).then(setPlayerRoster);
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
            <h2>Backyard Baseball</h2>
            <div>
              <Nav />
              <Routes players={playerRoster} setPlayerRoster={setPlayerRoster} editItem={editItem} setEditItem={setEditItem} userId={user.uid} />
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
