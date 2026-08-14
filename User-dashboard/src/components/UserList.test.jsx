import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import { UserList } from './UserList'

const users = [
  {
    id: '1',
    name: { first: 'Ada', last: 'Lovelace' },
    email: 'ada@example.com',
    picture: { thumbnail: 'ada.jpg' },
    location: { country: 'UK' },
  },
  {
    id: '2',
    name: { first: 'Grace', last: 'Hopper' },
    email: 'grace@example.com',
    picture: { thumbnail: 'grace.jpg' },
    location: { country: 'US' },
  },
]

describe('UserList', () => {
    it('renders every user passed to it', () => {
      render( <UserList users={users} />, {
        wrapper: MemoryRouter,
      });
      expect(screen.getByText('Ada Lovelace')).toBeInTheDocument()
      expect(screen.getByText('Grace Hopper')).toBeInTheDocument()
    })
    
  })
