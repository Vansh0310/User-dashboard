import { useEffect, useState } from 'react'
import { fetchUserById } from '../api/user'

export function useUser(id) {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  async function load() {
    setIsLoading(true)
    setError(null)
    try {
      const data = await fetchUserById(id)
      setUser(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    load()
  }, [id])

  return { user, isLoading, error }
}
