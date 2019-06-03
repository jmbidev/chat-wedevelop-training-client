import gql from 'graphql-tag'

import AuthResultFragment from './authResultFragment'

export default gql`
  mutation Signin($data: SigninInput!) {
    signin(data: $data) {
      ...AuthResultFragment
    }
  }

  ${AuthResultFragment} 
`
