import React from 'react';
import { useHistory } from 'react-router-dom';
import { signOutUser } from '../api/auth';

export default function Nav() {
  const history = useHistory();
  return (
    <div>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" onClick={() => history.push('/teams')} className="btn btn-primary">
          Teams
        </button>
        <button type="button" onClick={() => history.push('/new')} className="btn btn-primary">
          New
        </button>
        <button
          type="button"
          id="that-button"
          className="btn btn-danger"
          onClick={signOutUser}
        >
          SIGN OUT
        </button>
      </div>
    </div>
  );
}
