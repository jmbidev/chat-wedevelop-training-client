import { setContext } from 'apollo-link-context'
import userAccessTokenQuery from './queries/userAccessToken'

export default setContext((_, { headers, cache, ...rest }) => {
  const { userAccessToken } = cache.readQuery({
    query: userAccessTokenQuery
  })

  return {
    headers: {
      ...headers,
      Authorization: userAccessToken ? `Bearer ${userAccessToken}` : ''
    }
  }
})
