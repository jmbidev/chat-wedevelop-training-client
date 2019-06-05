import React, { Fragment } from 'react'

import UserAuthentication from '../Authentication/components/UserAuthentication'

export default CurrentUser

function CurrentUser () {
  return (
    <UserAuthentication
      redirectTo='/auth/login'
      onError={console.error.bind(console)}
    >
      {({ loading, error, user }) => {
        if (loading) {
          return <Loading />
        } else if (error) {
          return <Error />
        } else {
          return <UserInfo user={user} />
        }
      }}
    </UserAuthentication>
  )
}

function Loading () {
  return (
    <b>Loading...</b>
  )
}

function Error () {
  return (
    <b>Error loading user data</b>
  )
}

function UserInfo ({ user }) {
  const { username, firstName, lastName } = user || { }
  return (
    <Fragment>
      <UserInfoField title='Username:' value={username} />
      <UserInfoField title='First name:' value={firstName} />
      <UserInfoField title='Last name:' value={lastName} />
    </Fragment>
  )
}

function UserInfoField ({ title, value }) {
  return (
    <p>
      <b>{title} </b>
      <span>{value}</span>
    </p>
  )
}
