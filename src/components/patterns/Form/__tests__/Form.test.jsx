import React from 'react'
import Form from '../Form'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'

describe('InputField Component', () => {
  it('should render a form', () => {
    render(<Form device={{}} />)
    expect(screen.getByRole('form')).toBeInTheDocument()
  })

  it('should display an error when a field in the form is not valid', () => {
    render(<Form device={{}} />)
    userEvent.type(screen.getByPlaceholderText('System Name'), 'Mac')
    userEvent.click(screen.getByRole('button', { name: /continue/i }))
    expect(screen.getByText('HDD Capacity is required')).toBeInTheDocument()
  })
})
