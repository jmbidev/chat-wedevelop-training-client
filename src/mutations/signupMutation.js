import gql from 'graphql-tag'

import AuthResultFragment from './authResultFragment'

export default gql`
  mutation Signup($data: SignupInput!) {
    ${AuthResultFragment}
    
    signup(data: $data) {
      ...AuthResultFragment
    }
  }
`
