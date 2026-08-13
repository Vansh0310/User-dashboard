export function StatusMessage({ kind, message }) {
    const styles = {
      loading: 'text-muted font-mono',
      error: 'text-red-700 bg-red-50 border border-red-200 rounded-sm px-4 py-3 font-mono',
      empty: 'text-muted font-mono',
    }
  
    const defaultText = {
      loading: 'Loading users…',
      error: 'Something went wrong.',
      empty: 'No users found.',
    }
  
    return (
      <div role={kind === 'error' ? 'alert' : 'status'} className={`text-sm ${styles[kind]}`}>
        {message || defaultText[kind]}
      </div>
    )
  }