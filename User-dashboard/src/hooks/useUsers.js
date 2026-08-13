import { useEffect, useState } from 'react'
import { fetchUsers, fetchUserById } from '../api/user'

export function useUsers(idOrCount) {
  const [users, setUsers] = useState(null)
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function load() {
      setIsLoading(true)
      setError(null)
      try {
        if (typeof idOrCount === 'string') {
          const data = await fetchUserById(idOrCount)
          setUser(data)
        } else {
          const data = await fetchUsers(idOrCount)
          setUsers(data)
        }
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    load()
  }, [idOrCount])

  return { users, user, isLoading, error }
}
