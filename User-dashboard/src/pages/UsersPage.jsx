import { useEffect, useState } from 'react'
import { fetchUsers } from '../api/user'

export function UsersPage() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetchUsers(15).then((data) => setUsers(data))
  }, [])

  

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Users list goes here</h1>
      <p>Fetched {users.length} users.</p>
    </div>
  )
}