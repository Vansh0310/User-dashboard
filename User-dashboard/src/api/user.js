const BASE_URL = 'https://randomuser.me/api/'

export async function fetchUsers(count = 15) {
  const response = await fetch(`${BASE_URL}?results=${count}`)

  if (!response.ok) {
    throw new Error(`Failed to fetch users (status ${response.status})`)
  }

  const data = await response.json()
  return data.results.map((user) => ({ ...user, id: user.login.uuid }))
}

export async function fetchUserById(id) {
  const response = await fetch(`${BASE_URL}?results=50`)

  if (!response.ok) {
    throw new Error(`Failed to fetch user (status ${response.status})`)
  }

  const data = await response.json()
  const user = data.results.find((person) => person.login.uuid === id)

  if (!user) {
    throw new Error('User not found')
  }

  return user
}