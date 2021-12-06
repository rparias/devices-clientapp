import React from 'react'
import Dashboard from '../Dashboard'
import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from '@testing-library/react'

describe('Dashboard page', () => {
  describe('Dialog behaviour', () => {
    it('should close the dialog when the button is clicked', async () => {
      render(<Dashboard />)
      userEvent.click(screen.getByRole('button', { name: /add device/i }))
      userEvent.click(screen.getByRole('button', { name: /cancel/i }))
      await waitFor(() => {
        expect(screen.queryByTestId('dialog')).not.toBeInTheDocument()
      })
    })
  })
})
