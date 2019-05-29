import React from 'react'
import { string } from 'yup'

import AuthForm from '../AuthForm'

import signupMutation from '../../../../mutations/signupMutation'

const fields = [
  {
    name: 'firstName',
    placeholder: 'First name',
    validation: string().required('Please provide your first name')
  },
  {
    name: 'lastName',
    placeholder: 'Last name',
    validation: string().required('Please provide your last name')
  },
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

export default SignUpForm

function SignUpForm ({ onError, onSuccess }) {
  return (
    <AuthForm
      mutation={signupMutation}

      fields={fields}
      submitText='Sign up'

      onError={onError}
      onSuccess={onSuccess}

      extractResult={({ signup }) => signup}
    />
  )
}

SignUpForm.propTypes = {
  onError: AuthForm.propTypes.onError,
  onSuccess: AuthForm.propTypes.onSuccess
}
