import { useUsers } from '../hooks/useUsers'
import { StatusMessage } from '../components/StatusMessage'

export function UsersPage() {
  const { users, isLoading, error } = useUsers(15)

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      {isLoading && <StatusMessage kind="loading" />}
      {error && <StatusMessage kind="error" message={error} />}
      {!isLoading && !error && users.length === 0 && <StatusMessage kind="empty" />}
      {!isLoading && !error && users.length > 0 && <p>Fetched {users.length} users.</p>}
    </div>
  )
}