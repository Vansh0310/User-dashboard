import { useUsers } from '../hooks/useUsers'

export function UsersPage() {
  const { users, isLoading, error } = useUsers(15)

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Users list goes here</h1>
      <p>Loading: {String(isLoading)}</p>
      <p>Error: {String(error)}</p>
      <p>Fetched {users.length} users.</p>
    </div>
  )
}