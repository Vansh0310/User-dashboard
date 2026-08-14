import { useEffect, useState } from 'react'
import { fetchUsers } from '../api/user'

export function useUsers(count) {
  const [users, setUsers] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  async function load() {
    setIsLoading(true)
    setError(null)
    try {
      const data = await fetchUsers(count)
      setUsers(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    load()
  }, [count])

  return { users, isLoading, error }
}
