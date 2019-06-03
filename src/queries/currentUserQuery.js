import gql from 'graphql-tag'

export default gql`
  query GetCurrentUser{
    currentUser {
      id
      username
      firstName
      lastName
    }
  }
`
