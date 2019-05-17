import React from 'react'
import { Formik, Field, Form as FormikForm, ErrorMessage } from 'formik'
import BootstrapForm from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { object, isSchema } from 'yup'
import PropTypes from 'prop-types'

export { Form as default, SubmitButton }

function Form ({ fields, children, ...props }) {
  return (
    <Formik
      validationSchema={buildSchemaFromFields(fields)}
      initialValues={buildInitialValuesFromFields(fields)}
      {...props}
    >
      {({ touched, errors }) => (
        <FormikForm noValidate>
          {fields.map(({ name, ...fieldProps }) => (
            <FormField {...fieldProps} key={name} name={name} isValid={touched[name] && !errors[name]} />
          ))}

          {children}
        </FormikForm>
      )}
    </Formik>
  )
}

function buildSchemaFromFields (fields) {
  const fieldsSchema = reduceFields(fields, ({ validation }) => validation)
  return object().shape(fieldsSchema)
}

function buildInitialValuesFromFields (fields) {
  return reduceFields(fields, ({ initialValue }) => initialValue || '')
}

function reduceFields (fields, propertySelector) {
  return fields.reduce((previousReduction, { name, ...properties }) => ({
    ...previousReduction,
    [name]: propertySelector(properties)
  }))
}

function FormField ({ name, placeholder, isValid, type = 'text' }) {
  return (
    <BootstrapForm.Group>
      <Field name={name}>
        {({ field: { onChange, onBlur } }) => (
          <BootstrapForm.Control
            name={name}
            placeholder={placeholder}
            isValid={isValid}
            isInvalid={isValid === false}
            type={type}
            onChange={onChange}
            onBlur={onBlur}
          />
        )}
      </Field>
      <ErrorMessage component={BootstrapForm.Control.Feedback} type='invalid' name={name} />
    </BootstrapForm.Group>
  )
}

function SubmitButton ({ children }) {
  return (
    <Button type='submit' className='w-100 mt-2 mb-5 py-2'>
      {children}
    </Button>
  )
}

Form.propTypes = {
  children: PropTypes.node,
  fields: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'password']),
    placeholder: PropTypes.string,
    initialValue: PropTypes.string,
    validation: (props, propName, componentName) => {
      if (!isSchema(props[propName])) {
        return new Error(`Invalid prop "${propName}" supplied to "${componentName}". Not a valid Yup Schema.`)
      }
    }
  })
}

SubmitButton.propTypes = {
  children: PropTypes.node
}
