import React, { useState } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default (props) => {
  const { onSubmit, submitButtonText, disableSubmitButton, children, ...otherProps } = props

  const [isValidated, setIsValidated] = useState(false)

  return (
    <Form
      {...otherProps}
      noValidate
      onSubmit={handleSubmit}
      validated={isValidated}
    >
      {children}
      { disableSubmitButton ||
        <Button type='submit' className='w-100 mt-2 mb-5 py-2'>
          {submitButtonText}
        </Button>
      }
    </Form>
  )

  function handleSubmit (e) {
    e.preventDefault()
    e.stopPropagation()

    const form = e.currentTarget
    const isFormValid = form.checkValidity()

    if (isFormValid) {
      const fields = extractFormFieldsValues(form)
      onSubmit(fields)
    }

    setIsValidated(true)
  }
}

function extractFormFieldsValues (form) {
  return Array.from(form.elements)
    .reduce((previousReduction, formField) => {
      if (!formField.name) return previousReduction
      else {
        return {
          ...previousReduction,
          [formField.name]: formField.value
        }
      }
    }, {})
}
