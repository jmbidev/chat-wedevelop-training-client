import gql from 'graphql-tag'

export default gql`
  query GetUserAccessToken {
    userAccessToken @client
  }
`
