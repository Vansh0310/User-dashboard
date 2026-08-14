import { useEffect, useState } from 'react'
import { fetchUsers } from '../api/user'

export function useUsers(id) {
  const [users, setUsers] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  async function load() {
    setIsLoading(true)
    setError(null)
    try {
      const data = await fetchUsers(id)
      setUsers(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional fetch; setState happens via load()
    load()
    // eslint-disable-next-line react-hooks/exhaustive-deps -- load closes over id; id is the real dependency
  }, [id])

  return { users, isLoading, error }
}
