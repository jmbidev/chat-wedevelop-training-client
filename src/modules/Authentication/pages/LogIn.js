import React, { useState } from 'react'

import AuthPageFormat from '../components/AuthPageFormat'
import LogInForm from '../components/LogInForm'

export default (props) => {
  const [showErrorMessage, setShowErrorMessage] = useState(false)

  return (
    <AuthPageFormat
      title='Member login'
      link={{ to: '/auth/signup', text: 'Don\'t have an account?' }}
      showErrorMessage={showErrorMessage}
      onHideErrorMessage={() => setShowErrorMessage(false)}
      onError={handleError}
    >
      <LogInForm
        onSuccess={handleSuccess}
        onError={handleError}
      />
    </AuthPageFormat>
  )

  function handleSuccess (user) {
    setShowErrorMessage(false)
  }

  function handleError (error) {
    console.error(error)
    setShowErrorMessage(true)
  }
}
