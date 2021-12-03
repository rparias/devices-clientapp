import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from '../Button'

describe('Button Component', () => {
  it('should render the button properly', () => {
    render(<Button>Click Me</Button>)
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument()
  })
})
