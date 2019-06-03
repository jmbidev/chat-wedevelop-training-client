import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { persistCache } from 'apollo-cache-persist'
import { createHttpLink } from 'apollo-link-http'

import userAuthenticationMiddleware from './userAuthenticationMiddleware'
import initializeLocalCache from './apolloLocalCacheInitialization'

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
  initializeLocalCache(cache)

  const client = new ApolloClient({
    link: userAuthenticationMiddleware.concat(httpLink),
    cache
  })

  ReactDOM.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
    root
  )
})
