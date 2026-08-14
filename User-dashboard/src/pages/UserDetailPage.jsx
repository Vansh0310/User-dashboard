import { useParams, useNavigate } from 'react-router-dom'
import { Link } from 'react-aria-components'
import { useUser } from '../hooks/useUser'
import { StatusMessage } from '../components/StatusMessage'

export function UserDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { user, isLoading, error } = useUser(id)
  const status = isLoading ? 'loading' : error ? 'error' : null

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
        {status && <StatusMessage kind={status} message={error} />}

        {status === null && user && (
          <div className="border border-rule bg-white">
            <div className="flex items-center gap-5 p-6 border-b border-dotted border-rule">
              <img
                src={user.picture.large}
                alt=""
                className="h-16 w-16 rounded-sm object-cover border border-rule"
              />
              <div>
                <p className="font-display text-2xl text-ink">
                  {user.name.title} {user.name.first} {user.name.last}
                </p>
                <p className="font-mono text-xs text-muted mt-1">{user.email}</p>
              </div>
            </div>

            <dl className="grid grid-cols-1 sm:grid-cols-2">
              <Detail label="Phone" value={user.phone} />
              <Detail label="Cell" value={user.cell} />
              <Detail label="Gender" value={user.gender} />
              <Detail label="Date of birth" value={new Date(user.dob.date).toLocaleDateString()} />
              <Detail
                label="Address"
                value={`${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.country}`}
                full
              />
              <Detail label="Username" value={user.login.username} />
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