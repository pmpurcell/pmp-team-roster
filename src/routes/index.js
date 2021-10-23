import React from 'react';
import { PropTypes } from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import New from '../Components/New';
import Teams from '../Components/Teams';

export default function Routes({
  players,
  setPlayerRoster,
  setEditItem,
  editItem,
  userId,
}) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={() => <Teams players={players} setPlayerRoster={setPlayerRoster} setEditItem={setEditItem} userId={userId} />} />
        <Route exact path="/new" component={() => <New players={players} setPlayerRoster={setPlayerRoster} obj={editItem} setEditItem={setEditItem} userId={userId} />} />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  editItem: PropTypes.shape({}).isRequired,
  setPlayerRoster: PropTypes.func.isRequired,
  setEditItem: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
};
