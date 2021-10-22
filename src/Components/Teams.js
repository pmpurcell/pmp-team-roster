import { React } from 'react';
import { PropTypes } from 'prop-types';

export default function Teams({ players }) {
  return (
    <div>
      <div>
        {players.map((player) => (
          <div className="card" style={{ width: 300 }} key={player.firebaseKey}>
            <img
              className="card-img-top"
              src={player.imageUrl}
              alt={player.name}
            />
            <div className="card-body">
              <h5 className="card-title">{player.name}</h5>
              <p className="card-text">Position:{player.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

Teams.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
