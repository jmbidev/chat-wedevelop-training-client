import React from 'react'

import AuthPageFormat from '../components/AuthPageFormat'
import LogInForm from '../components/LogInForm'

export default (props) => {
  return (
    <AuthPageFormat
      title='Member login'
      link={{ to: '/auth/signup', text: 'Don\'t have an account?' }}
    >
      <LogInForm onSubmit={handleFormSubmit} />
    </AuthPageFormat>
  )

  function handleFormSubmit (fields) {
    console.log(fields)
  }
}
