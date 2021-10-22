import { React } from 'react';
import { PropTypes } from 'prop-types';
import Player from './Player';

export default function Teams({ players, setPlayerRoster }) {
  return (
    <div>
      {players.map((player) => (
        <Player player={player} setPlayerRoster={setPlayerRoster} />
      ))}
    </div>
  );
}

Teams.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  setPlayerRoster: PropTypes.func.isRequired,
};
