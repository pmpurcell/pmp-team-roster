import React from 'react'
import { Route, Switch } from 'react-router'
import New from '../Components/New'
import Teams from '../Components/Teams'

export default function index() {
    return (
        <div>
          <Switch>
            <Route exact path="/teams" component={Teams} />
            <Route exact path="/new" component={New} />
          </Switch>
        </div>
    )
}

