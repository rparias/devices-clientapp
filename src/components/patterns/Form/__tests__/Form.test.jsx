import React from 'react'
import Form from '../Form'
import { render, screen } from '@testing-library/react'

describe('InputField Component', () => {
  it('should render a form', () => {
    render(<Form />)
    expect(screen.getByRole('form')).toBeInTheDocument()
  })
})
