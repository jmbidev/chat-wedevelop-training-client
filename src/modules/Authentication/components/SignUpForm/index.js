import React from 'react'
import { string } from 'yup'
import PropTypes from 'prop-types'

import Form, { SubmitButton } from '../Form'

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

function SignUpForm ({ onSubmit }) {
  return (
    <Form fields={fields} onSubmit={onSubmit}>
      <SubmitButton>Sign up</SubmitButton>
    </Form>
  )
}

SignUpForm.propTypes = {
  onSubmit: PropTypes.func
}
