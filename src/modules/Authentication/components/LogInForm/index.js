import React from 'react'
import { string } from 'yup'
import PropTypes from 'prop-types'

import Form, { SubmitButton } from '../Form'

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

function LogInForm ({ onSubmit }) {
  return (
    <Form fields={fields} onSubmit={onSubmit}>
      <SubmitButton>Sign in</SubmitButton>
    </Form>
  )
}

LogInForm.propTypes = {
  onSubmit: PropTypes.func
}
