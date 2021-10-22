import React from 'react';
import { PropTypes } from 'prop-types';
import { deletePlayers } from '../api/data/playerData';

export default function Player({ player, setPlayerRoster }) {
  const handleDelete = () => {
    deletePlayers(player.firebaseKey).then(setPlayerRoster);
  };
  return (
    <div>
      <div className="card" style={{ width: 300 }} key={player.firebaseKey}>
        <img className="card-img-top" src={player.imageUrl} alt={player.name} />
        <div className="card-body">
          <h5 className="card-title">{player.name}</h5>
          <p className="card-text">Position:{player.position}</p>
        </div>
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button type="button" className="btn btn-success">
            Edit
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className="btn btn-danger"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

Player.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string,
    position: PropTypes.string,
    imageUrl: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  setPlayerRoster: PropTypes.func.isRequired,
};
