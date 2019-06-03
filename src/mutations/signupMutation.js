import gql from 'graphql-tag'

import AuthResultFragment from './authResultFragment'

export default gql`
  mutation Signup($data: SignupInput!) {
    signup(data: $data) {
      ...AuthResultFragment
    }
  }

  ${AuthResultFragment}
`
