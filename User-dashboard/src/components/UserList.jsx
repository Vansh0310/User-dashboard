import { GridList, GridListItem } from 'react-aria-components'
import { useNavigate } from 'react-router-dom'

export function UserList({ users }) {
  const navigate = useNavigate()

  return (
    <GridList aria-label="Users" onAction={(id) => navigate(`/users/${id}`)}>
      {users.map((user) => (
        <GridListItem key={user.id} id={user.id} textValue={`${user.name.first} ${user.name.last}`}>
          {user.name.first} {user.name.last}
        </GridListItem>
      ))}
    </GridList>
  )
}