export function StatusMessage({ kind, message }) {
    const styles = {
      loading: 'text-slate-500',
      error: 'text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3',
      empty: 'text-slate-500',
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