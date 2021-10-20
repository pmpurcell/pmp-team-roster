import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import New from '../Components/New';
import Teams from '../Components/Teams';

export default function Routes(userId) {
  return (
    <div>
      <Switch>
        <Route exact path="/teams" component={() => <Teams userId={userId} />} />
        <Route exact path="/new" component={New} />
      </Switch>
    </div>
  );
}

Teams.propTypes = {
  userId: PropTypes.string.isRequired,
};
