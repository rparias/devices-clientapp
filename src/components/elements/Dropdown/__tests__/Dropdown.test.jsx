import React from 'react'
import Dropdown from '../Dropdown'
import { render, screen } from '@testing-library/react'

describe('Dropdown Component', () => {
  it('should render a dropdown properly', () => {
    render(<Dropdown name="test" />)
    expect(screen.getByRole('combobox')).toBeInTheDocument()
  })
})
