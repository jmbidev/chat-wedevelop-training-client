import gql from 'graphql-tag'

export default gql`
  fragment AuthResultFragment on AuthenticationResult {
    user {
      id
      username
      firstName
      lastName
    }
    jwt
    authError 
  }
`
