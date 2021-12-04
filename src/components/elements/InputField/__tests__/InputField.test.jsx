import React from 'react'
import InputField from '../InputField'
import { render, screen } from '@testing-library/react'

describe('InputField Component', () => {
  it('should render an input field without a label if not provided', () => {
    render(<InputField name="test" />)
    expect(screen.queryByTestId('label-element')).not.toBeInTheDocument()
  })

  it('should render an input field with a label if provided', () => {
    render(<InputField name="test" label="label test" />)
    expect(screen.queryByTestId('label-element')).toBeInTheDocument()
  })

  it('should render an input type radio if passed as prop', () => {
    render(<InputField name="test" type="radio" />)
    expect(screen.getByRole('radio')).toBeInTheDocument()
  })

  it('should render an input type checkbox if passed as prop', () => {
    render(<InputField name="test" type="checkbox" />)
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })
})
