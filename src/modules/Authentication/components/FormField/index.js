import React from 'react'

import Form from 'react-bootstrap/Form'

export default (props) => {
  const { type = 'text', name, required = true, invalidFeedback = defaultInvalidFeedbackGenerator } = props
  const invalidFeedbackString = typeof invalidFeedback === 'function' ? invalidFeedback(props) : invalidFeedback
  const camelCaseName = convertToCamelCase(name)

  return (
    <Form.Group controlId={`${camelCaseName}${firstLetterUpperCase(type)}Field`}>
      <Form.Control type={type} name={camelCaseName} placeholder={name} required={required} />
      <Form.Control.Feedback type='invalid'>
        {invalidFeedbackString}
      </Form.Control.Feedback>
    </Form.Group>
  )
}

function defaultInvalidFeedbackGenerator ({ name }) {
  return `Please provide a ${name.toLowerCase()}`
}

function convertToCamelCase (string) {
  return string
    .toLowerCase()
    .split(' ')
    .map((word, index) => index === 0 ? word : firstLetterUpperCase(word))
    .join('')
}

function firstLetterUpperCase (word) {
  return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()
}

export function personalFieldFeedbackGenerator ({ name }) {
  return `Please provide your ${name.toLowerCase()}`
}
