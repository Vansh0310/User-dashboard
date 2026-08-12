const BASE_URL = 'https://randomuser.me/api/'

export async function fetchUsers(count = 15) {
  const response = await fetch(`${BASE_URL}?results=${count}&seed=User-dashboard`)

  if (!response.ok) {
    throw new Error(`Failed to fetch users (status ${response.status})`)
  }

  const data = await response.json()
  return data.results.map((user, index) => ({ ...user, id: index }))
}

export async function fetchUserById(id) {
  const response = await fetch(`${BASE_URL}?results=50&seed=user-dashboard`)

  if (!response.ok) {
    throw new Error(`Failed to fetch user (status ${response.status})`)
  }

  const data = await response.json()
  const index = Number(id)
  const user = data.results[index]

  if (!user) {
    throw new Error('User not found')
  }

  return user
}