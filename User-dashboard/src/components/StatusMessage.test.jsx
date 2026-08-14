import { render, screen } from '@testing-library/react'
import { StatusMessage } from './StatusMessage'

describe('StatusMessage', () => {
  it('shows the default loading text when no message is given', () => {
    render(<StatusMessage kind="loading" />)
    expect(screen.getByText('Loading users…')).toBeInTheDocument()
  })

  it("shows a custom message when a message is provided", () => {
    render(<StatusMessage kind="error" message="Network is down" />)
    expect(screen.getByText('Network is down')).toBeInTheDocument()
    
  });

  it('uses an alert role for errors, so screen readers announce it', () => {
    render(<StatusMessage kind="error" message="Oops" />)
    expect(screen.getByRole('alert')).toBeInTheDocument()
  });

  it('uses a status role (not alert) for loading, since it is not urgent', () => {
    render(<StatusMessage kind="loading" />)
    expect(screen.getByRole('status')).toBeInTheDocument()
  });
  
})