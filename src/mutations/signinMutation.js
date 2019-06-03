import gql from 'graphql-tag'

import AuthResultFragment from './authResultFragment'

export default gql`
  mutation Signin($data: SigninInput!) {
    ${AuthResultFragment}

    signin(data: $data) {
      ...AuthResultFragment
    }
  }
`
