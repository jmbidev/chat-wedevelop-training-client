import React from 'react'
import { Query } from 'react-apollo'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

import currentUserQuery from '../../../../queries/currentUserQuery'

export default UserAuthentication

function UserAuthentication ({ onError, onLoading, authRequired, redirectTo, children }) {
  authRequired = authRequired !== false

  return (
    <Query
      query={currentUserQuery}
      onError={onError}
      onLoading={onLoading}
    >
      {params => renderQueryResult({ authRequired, redirectTo, children, ...params })}
    </Query>
  )
}

UserAuthentication.propTypes = {
  onError: PropTypes.func,
  onLoading: PropTypes.func,
  authRequired: PropTypes.bool,
  redirectTo: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired
}

function renderQueryResult ({ authRequired, redirectTo, loading, error, data, children }) {
  const isAuthenticated = isUserAuthenticated(data)
  const shouldRedirect = (authRequired && !isAuthenticated) || (!authRequired && isAuthenticated)

  if (!loading && !error && redirectTo && shouldRedirect) {
    return <Redirect to={redirectTo} />
  } else {
    return render(children, { loading, error, user: extractUser(data) })
  }
}

function isUserAuthenticated (queryResult) {
  const user = extractUser(queryResult)
  return typeof user === 'object' && user !== null
}

function extractUser (serverResponse) {
  return serverResponse && serverResponse.currentUser
}

function render (children, params) {
  if (typeof children === 'function') {
    return children(params)
  } else {
    return children
  }
}
