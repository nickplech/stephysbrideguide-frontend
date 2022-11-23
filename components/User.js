import Loader from './Loader'

import { gql, useQuery } from '@apollo/client'

const CURRENT_USER_QUERY = gql`
  query {
    authenticatedItem {
      ... on User {
        id
        email
        name
        isAdmin
      }
    }
  }
`

export function useUser() {
  const { data, loading } = useQuery(CURRENT_USER_QUERY)
  if (loading) return <Loader />

  if (data) {
    return data?.authenticatedItem
  }
}

export { CURRENT_USER_QUERY }
