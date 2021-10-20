import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import 'firebase/auth';
import SignIn from '../views/SignIn';
import Nav from '../Components/Nav';

function Initialize() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          profileImage: authed.photoUrl,
          uid: authed.uid,
        };
        setUser(userInfoObj);
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
