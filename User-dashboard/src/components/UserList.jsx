import { useContext } from 'react'
import { GridList, GridListItem } from 'react-aria-components'
import { useNavigate } from 'react-router-dom'
import { SelectedUserContext } from '../context/SelectedUserContext'

export function UserList({ users }) {
    const navigate = useNavigate()
    const { setSelectedUser } = useContext(SelectedUserContext)

    function handleAction(id) {
        const user = users.find((person) => person.id === id)
        setSelectedUser(user)
        navigate(`/users/${id}`)
      }
      
  return (
    <GridList
      aria-label="Users"
      onAction={handleAction}
      className="border-t border-rule"
    >
      {users.map((user, position) => (
        <GridListItem
          key={user.id}
          id={user.id}
          textValue={`${user.name.first} ${user.name.last}`}
          className="group relative flex items-center gap-5 border-b border-dotted border-rule py-4 pl-2 pr-4 cursor-pointer outline-none
                     data-[hovered]:bg-ink/[0.03]
                     data-[focus-visible]:bg-ledger/[0.06]"
        >
          <span className="absolute left-0 top-0 h-full w-[3px] bg-ledger scale-y-0 transition-transform duration-150 group-data-[hovered]:scale-y-100 group-data-[focus-visible]:scale-y-100" />

          <span className="font-mono text-xs text-muted w-8 shrink-0 text-right tabular-nums">
            {String(position + 1).padStart(2, '0')}
          </span>

          <img
            src={user.picture.thumbnail}
            alt=""
            className="h-11 w-11 rounded-sm object-cover border border-rule flex-shrink-0"
          />

          <span className="min-w-0 flex-1">
            <span className="block font-display text-lg text-ink truncate">
              {user.name.first} {user.name.last}
            </span>
            <span className="block font-mono text-xs text-muted truncate">
              {user.email}
            </span>
          </span>

          <span className="hidden sm:block font-mono text-[11px] uppercase tracking-wide text-muted">
            {user.location.country}
          </span>
        </GridListItem>
      ))}
    </GridList>
  )
}