import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-aria-components'
import { SelectedUserContext } from '../context/SelectedUserContext'
import { StatusMessage } from '../components/StatusMessage'

export function UserDetailPage() {
  const navigate = useNavigate()
  const { selectedUser } = useContext(SelectedUserContext)

  return ( 
    <div className="max-w-xl mx-auto px-6 py-10">
      <Link
        onPress={() => navigate('/')}
        className="font-mono text-xs uppercase tracking-wide text-ledger cursor-pointer outline-none
                   data-[hovered]:underline
                   data-[focus-visible]:ring-1 data-[focus-visible]:ring-ledger rounded-sm"
      >
        ← Back to directory
      </Link>

      <div className="mt-8">
        {!selectedUser && (
          <StatusMessage kind="error" message="No user data available. Please go back and select a user from the list." />
        )}

        {selectedUser && (
          <div className="border border-rule bg-white">
            <div className="flex items-center gap-5 p-6 border-b border-dotted border-rule">
              <img
                src={selectedUser.picture.large}
                alt=""
                className="h-16 w-16 rounded-sm object-cover border border-rule"
              />
              <div>
                <p className="font-display text-2xl text-ink">
                  {selectedUser.name.title} {selectedUser.name.first} {selectedUser.name.last}
                </p>
                <p className="font-mono text-xs text-muted mt-1">{selectedUser.email}</p>
              </div>
            </div>

            <dl className="grid grid-cols-1 sm:grid-cols-2">
              <Detail label="Phone" value={selectedUser.phone} />
              <Detail label="Cell" value={selectedUser.cell} />
              <Detail label="Gender" value={selectedUser.gender} />
              <Detail label="Date of birth" value={new Date(selectedUser.dob.date).toLocaleDateString()} />
              <Detail
                label="Address"
                value={`${selectedUser.location.street.number} ${selectedUser.location.street.name}, ${selectedUser.location.city}, ${selectedUser.location.country}`}
                full
              />
              <Detail label="Username" value={selectedUser.login.username} />
            </dl>
          </div>
        )}
      </div>
    </div>
  )
}

function Detail({ label, value, full }) {
  return (
    <div className={`px-6 py-4 border-b border-dotted border-rule ${full ? 'sm:col-span-2' : ''}`}>
      <dt className="font-mono text-[11px] uppercase tracking-wide text-muted">{label}</dt>
      <dd className="text-ink mt-1">{value}</dd>
    </div>
  )
}