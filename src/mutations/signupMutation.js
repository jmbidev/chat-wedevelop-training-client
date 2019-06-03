import gql from 'graphql-tag'

export default gql`
  mutation Signup($data: SignupInput!) {
    signup(data: $data) {
      user {
        id
        username
        firstName
        lastName
      }
      jwt
      authError
    }
  }
`
