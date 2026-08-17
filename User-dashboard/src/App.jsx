import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { UsersPage } from './pages/UsersPage'
import { UserDetailPage } from './pages/UserDetailPage'
import { SelectedUserContext } from './context/SelectedUserContext'

function App() {
  const [selectedUser, setSelectedUser] = useState(null)

  return (
    <SelectedUserContext.Provider value={{ selectedUser, setSelectedUser }}>
      <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="/users/:id" element={<UserDetailPage />} />
      </Routes>
    </SelectedUserContext.Provider>
  )
}

export default App