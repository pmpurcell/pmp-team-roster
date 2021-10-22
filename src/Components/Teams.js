import { React } from 'react';
import { PropTypes } from 'prop-types';
import Player from './Player';

export default function Teams({ players, setPlayerRoster, setEditItem }) {
  return (
    <div>
      {players.map((player) => (
        <Player player={player} setPlayerRoster={setPlayerRoster} setEditItem={setEditItem} />
      ))}
    </div>
  );
}

Teams.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  setPlayerRoster: PropTypes.func.isRequired,
  setEditItem: PropTypes.func.isRequired,
};
