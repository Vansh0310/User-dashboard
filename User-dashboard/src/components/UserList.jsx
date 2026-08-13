export function UserList({ users }) {
    return (
      <div>
        {users.map((user) => (
          <div key={user.id}>
            {user.name.first} {user.name.last}
          </div>
        ))}
      </div>
    )
  }