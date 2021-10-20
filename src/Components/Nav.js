import React from 'react';
import { signOutUser } from '../api/auth';

export default function Nav() {
  return (
    <div>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-primary">
          Teams
        </button>
        <button type="button" className="btn btn-primary">
          New
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
    </div>
  );
}
