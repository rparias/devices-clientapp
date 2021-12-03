import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from '../Button'

describe('Button Component', () => {
  it('should render the button properly', () => {
    render(<Button>Click Me</Button>)
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument()
  })

  it('should call a callback when clicked if a function is passed', () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick}>Click Me</Button>)
    const button = screen.getByRole('button', { name: /click me/i })
    button.click()
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('should have the primary class by default', () => {
    render(<Button>Click Me</Button>)
    expect(screen.getByRole('button', { name: /click me/i })).toHaveClass('primary')
  })

  it('should have the secondary class if passed as variant prop', () => {
    render(<Button variant="secondary">Click Me</Button>)
    expect(screen.getByRole('button', { name: /click me/i })).toHaveClass('secondary')
  })

  it('should have the md class by default', () => {
    render(<Button>Click Me</Button>)
    expect(screen.getByRole('button', { name: /click me/i })).toHaveClass('md')
  })

  it('should have the sm class if passed as size prop', () => {
    render(<Button size="sm">Click Me</Button>)
    expect(screen.getByRole('button', { name: /click me/i })).toHaveClass('sm')
  })
})
