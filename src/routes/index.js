import React from 'react';
import { PropTypes } from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import New from '../Components/New';
import Teams from '../Components/Teams';

export default function Routes({ players, setPlayerRoster }) {
  return (
    <div>
      <Switch>
        <Route exact path="/teams" component={() => <Teams players={players} setPlayerRoster={setPlayerRoster} />} />
        <Route exact path="/new" component={() => <New players={players} setPlayerRoster={setPlayerRoster} />} />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  setPlayerRoster: PropTypes.func.isRequired,
};
