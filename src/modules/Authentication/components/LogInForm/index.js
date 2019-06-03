import React from 'react'
import { string } from 'yup'

import AuthForm from '../AuthForm'

import signinMutation from '../../../../mutations/signinMutation'

const fields = [
  {
    name: 'username',
    placeholder: 'Username',
    validation: string().required('Please provide a username')
  },
  {
    name: 'password',
    placeholder: 'Password',
    type: 'password',
    validation: string().required('Please provide a password')
  }
]

export default LogInForm

function LogInForm ({ onError, onSuccess }) {
  return (
    <AuthForm
      mutation={signinMutation}

      fields={fields}
      submitText={'Sign in'}

      onError={onError}
      onSuccess={onSuccess}

      extractResult={({ signin }) => signin}
    />
  )
}

LogInForm.propTypes = {
  onError: AuthForm.propTypes.onError,
  onSuccess: AuthForm.propTypes.onSuccess
}
