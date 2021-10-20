import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import 'firebase/auth';
import { useHistory } from 'react-router-dom';
import SignIn from '../views/SignIn';
import Nav from '../Components/Nav';
import Routes from '../routes';

function Initialize() {
  const [user, setUser] = useState(null);
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
        console.warn(user.uid);
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
            <h2>INSIDE APP COMPONENT</h2>
            <div>
              <Nav />
              <Routes userId={user.uid} />
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
