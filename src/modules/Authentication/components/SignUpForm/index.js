import React from 'react'

import Form from '../../containers/Form'
import FormField, { personalFieldFeedbackGenerator } from '../FormField'

export default (props) => {
  return (
    <Form
      submitButtonText='Sign up'
      {...props}
    >
      <FormField name='First name' invalidFeedback={personalFieldFeedbackGenerator} />
      <FormField name='Last name' invalidFeedback={personalFieldFeedbackGenerator} />
      <FormField name='Username' />
      <FormField name='Password' type='password' />
    </Form>
  )
}
