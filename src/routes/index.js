import React from 'react';
import { Route, Switch } from 'react-router-dom';
import New from '../Components/New';
import Teams from '../Components/Teams';

export default function Routes(routesUser) {
  return (
    <div>
      <Switch>
        <Route exact path="/teams" component={Teams} />
        <Route exact path="/new" component={() => <New userId={routesUser} />} />
      </Switch>
    </div>
  );
}
