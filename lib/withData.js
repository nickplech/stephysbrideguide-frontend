import { ApolloClient, InMemoryCache, ApolloLink } from '@apollo/client'
import { onError } from '@apollo/link-error'
import { getDataFromTree } from '@apollo/react-ssr'
import { createUploadLink } from 'apollo-upload-client'
import withApollo from 'next-with-apollo'
import { endpoint, prodEndpoint } from '../config'

function createClient({ headers, initialState }) {
  return new ApolloClient({
    link: ApolloLink.from([
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors)
          graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
          )
        if (networkError)
          console.log(
            `[Network error]: ${networkError}. Backend is unreachable. Is it running?`
          )
      }),

      createUploadLink({
        uri: endpoint,
        fetchOptions: {
          credentials: 'include',
        },
        headers,
      }),
    ]),
    cache: new InMemoryCache().restore(initialState || {}),
  })
}

export default withApollo(createClient, { getDataFromTree })
