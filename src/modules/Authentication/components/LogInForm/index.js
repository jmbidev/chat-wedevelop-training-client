import React from 'react'

import Form from '../../containers/Form'
import FormField from '../FormField'

export default (props) => {
  return (
    <Form
      submitButtonText='Log in'
      {...props}
    >
      <FormField name='Username' />
      <FormField name='Password' type='password' />
    </Form>
  )
}
