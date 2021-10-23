import React from 'react';
import { PropTypes } from 'prop-types';
import { useHistory } from 'react-router-dom';
import { deletePlayers } from '../api/data/playerData';

export default function Player({ player, setPlayerRoster, setEditItem }) {
  const history = useHistory();
  const handleDelete = () => {
    deletePlayers(player.firebaseKey).then(setPlayerRoster);
  };

  const handleEdit = () => {
    setEditItem(player);
    history.push('/new');
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
          <button
            type="button"
            onClick={(e) => handleEdit(e)}
            className="btn btn-success"
          >
            Edit
          </button>
          <button
            type="button"
            onClick={(e) => handleDelete(e)}
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
  setEditItem: PropTypes.func.isRequired,
};
