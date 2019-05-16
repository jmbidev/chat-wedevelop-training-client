import React from 'react'
import { Route, Switch } from 'react-router-dom'

import NotFound from '../NotFound'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'

export default ({ match }) => {
  return (
    <Switch>
      <Route path={`${match.path}/signup`} component={SignUp} />
      <Route path={`${match.path}/login`} component={LogIn} />
      <Route component={NotFound} />
    </Switch>
  )
}
