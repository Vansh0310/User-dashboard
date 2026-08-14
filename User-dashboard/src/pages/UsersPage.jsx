import { useMemo } from 'react'
import { useUsers } from '../hooks/useUsers'
import { StatusMessage } from '../components/StatusMessage'
import { UserList } from '../components/UserList'

export function UsersPage() {
  const { users, isLoading, error } = useUsers(15)

  const status = useMemo(() => {
    if (isLoading) return 'loading'
    if (error) return 'error'
    if (users.length === 0) return 'empty'
    return null
  }, [isLoading, error, users])

  return (
    <div className="p-6">
      <h1 className="font-display text-2xl text-ink mb-1">Users</h1>
      <p className="text-sm text-muted mb-6 font-mono">Click a user to see their full details.</p>
      {status && <StatusMessage kind={status} message={error} />}
      {status === null && <UserList users={users} />}
    </div>
  )
}