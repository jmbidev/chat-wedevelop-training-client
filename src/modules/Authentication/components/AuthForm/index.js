import React from 'react'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'

import Form, { SubmitButton } from '../Form'
import userAccessTokenQuery from '../../../../queries/userAccessToken'

export default AuthForm

function AuthForm ({ onError, onSuccess, mutation, extractResult, submitText, fields }) {
  return (
    <Mutation
      mutation={mutation}
      update={handleCacheUpdate}
      onError={onError}
      onCompleted={mutationResult => {
        const { authError, user } = extractResult(mutationResult)

        if (authError) {
          onError && onError(authError)
        } else {
          onSuccess && onSuccess(user)
        }
      }}
    >
      {(executeMutation, { loading }) => (
        <Form disabled={loading} fields={fields} onSubmit={data => executeMutation({ variables: { data } })}>
          <SubmitButton disabled={loading}>{submitText}</SubmitButton>
        </Form>
      )}
    </Mutation>
  )

  function handleCacheUpdate (cache, { data }) {
    const { jwt } = extractResult(data)

    if (jwt) {
      cache.writeQuery({
        query: userAccessTokenQuery,
        data: { userAccessToken: jwt }
      })
    }
  }
}

AuthForm.propTypes = {
  onError: PropTypes.func.isRequired,
  onSuccess: PropTypes.func.isRequired,
  mutation: PropTypes.object.isRequired,
  extractResult: PropTypes.func.isRequired,
  submitText: PropTypes.string.isRequired,
  fields: Form.propTypes.fields.isRequired
}
