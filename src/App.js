import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Authentication from './modules/Authentication'
import CurrentUser from './modules/CurrentUser'
import NotFound from './modules/NotFound'

const supportsHistory = 'pushState' in window.history

export default (props) => {
  return (
    <Router forceRefresh={!supportsHistory}>
      <Switch>
        <Route path='/auth' component={Authentication} />
        <Route path='/currentUser' component={CurrentUser} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}
