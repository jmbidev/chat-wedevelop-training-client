import React from 'react'
import { Formik, Field, Form as FormikForm, ErrorMessage } from 'formik'
import BootstrapForm from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { object, isSchema } from 'yup'
import PropTypes from 'prop-types'

export { Form as default, SubmitButton }

function Form ({ fields, children, disabled, ...props }) {
  return (
    <Formik
      validationSchema={buildSchemaFromFields(fields)}
      initialValues={buildInitialValuesFromFields(fields)}
      {...props}
    >
      {({ touched, errors }) => (
        <FormikForm noValidate>
          {fields.map(({ name, ...fieldProps }) => (
            <FormField {...fieldProps} disabled={disabled} key={name} name={name} isValid={touched[name] && !errors[name]} />
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
  }), {})
}

function FormField ({ name, disabled, placeholder, isValid, type = 'text' }) {
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
            disabled={disabled}
          />
        )}
      </Field>
      <ErrorMessage component={BootstrapForm.Control.Feedback} type='invalid' name={name} />
    </BootstrapForm.Group>
  )
}

function SubmitButton ({ children, disabled }) {
  return (
    <Button disabled={disabled} type='submit' className='w-100 mt-2 mb-5 py-2'>
      {children}
    </Button>
  )
}

Form.propTypes = {
  children: PropTypes.node,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
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
  ),
  disabled: PropTypes.bool
}

SubmitButton.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool
}
