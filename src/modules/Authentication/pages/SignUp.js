import React from 'react'

import AuthPageFormat from '../components/AuthPageFormat'
import SignUpForm from '../components/SignUpForm'

export default (props) => {
  return (
    <AuthPageFormat
      title='Member registration'
      link={{ to: '/auth/login', text: 'Do you already have an account?' }}
    >
      <SignUpForm onSubmit={handleFormSubmit} />
    </AuthPageFormat>
  )

  function handleFormSubmit (fields) {
    console.log(fields)
  }
}
