import { useEffect, useState } from 'react'
import { fetchUsers } from '../api/user'

export function useUsers(count = 15) {
    const [users, setUsers] = useState([])
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