import { React } from 'react';
import { PropTypes } from 'prop-types';
import Player from './Player';

export default function Teams({
  players,
  setPlayerRoster,
  setEditItem,
  userId,
}) {
  return (
    <div>
      {players.map((player) => (
        <Player key={player.firebaseKey} player={player} setPlayerRoster={setPlayerRoster} setEditItem={setEditItem} userId={userId} />
      ))}
    </div>
  );
}

Teams.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  setPlayerRoster: PropTypes.func.isRequired,
  setEditItem: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
};
