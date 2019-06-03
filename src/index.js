import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { persistCache } from 'apollo-cache-persist'
import { createHttpLink } from 'apollo-link-http'
import { withClientState } from 'apollo-link-state'

import userAuthenticationMiddleware from './userAuthenticationMiddleware'
import localResolversOnCacheMiss from './apolloLocalCacheResolvers'

import App from './App'

const root = document.getElementById('root')
const cache = new InMemoryCache()

const httpLink = createHttpLink({
  uri: 'http://localhost:7777/graphql'
})

persistCache({
  cache,
  storage: window.localStorage
}).then(() => {
  const link = withClientState({ cache, resolvers: localResolversOnCacheMiss })
    .concat(userAuthenticationMiddleware)
    .concat(httpLink)

  const client = new ApolloClient({ link, cache })

  ReactDOM.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
    root
  )
})
