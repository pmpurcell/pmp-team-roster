import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import 'firebase/auth';
import SignIn from '../views/SignIn';
import { signOutUser } from '../api/auth';

function Initialize() {
  const [domWriting, setDomWriting] = useState('Nothing Here!');
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

  const handleClick = (e) => {
    console.warn(`You clicked ${e.target.id}`);
    setDomWriting(`You clicked ${e.target.id}! Check the Console!`);
  };

  return (
    <>
      {user ? (
        <>
          <div className="App">
            <h2>INSIDE APP COMPONENT</h2>
            <div>
              <button
                type="button"
                id="this-button"
                className="btn btn-info"
                onClick={handleClick}
              >
                I am THIS button
              </button>
            </div>
            <div>
              <button
                type="button"
                id="that-button"
                className="btn btn-primary mt-3"
                onClick={handleClick}
              >
                I am THAT button
              </button>
              <button
                type="button"
                id="that-button"
                className="btn btn-danger mt-3"
                onClick={signOutUser}
              >
                SIGN OUT
              </button>
            </div>
            <h3>{domWriting}</h3>
          </div>
        </>
      ) : (
        <SignIn />
      )}
    </>
  );
}

export default Initialize;
