import React, { useState } from 'react'

import AuthPageFormat from '../components/AuthPageFormat'
import SignUpForm from '../components/SignUpForm'

export default (props) => {
  const [showErrorMessage, setShowErrorMessage] = useState(false)

  return (
    <AuthPageFormat
      title='Member registration'
      link={{ to: '/auth/login', text: 'Do you already have an account?' }}
      showErrorMessage={showErrorMessage}
      onHideErrorMessage={() => setShowErrorMessage(false)}
    >
      <SignUpForm
        onSuccess={handleSuccess}
        onError={handleError}
      />
    </AuthPageFormat>
  )

  function handleSuccess (user) {
    console.log(user)
    setShowErrorMessage(false)
  }

  function handleError (error) {
    console.error(error)
    setShowErrorMessage(true)
  }
}
