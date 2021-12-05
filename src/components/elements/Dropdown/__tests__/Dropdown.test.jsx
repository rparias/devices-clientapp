import React from 'react'
import Dropdown from '../Dropdown'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'

describe('Dropdown Component', () => {
  const optionList = [
    {
      label: 'element-1',
      value: 'element-1',
      id: 'element-1'
    },
    {
      label: 'element-2',
      value: 'element-2',
      id: 'element-2'
    }
  ]

  it('should render a dropdown properly', () => {
    render(<Dropdown name="test" optionsDropdown={optionList} />)
    expect(screen.getByRole('combobox')).toBeInTheDocument()
  })

  it('should render a dropdown with two options', () => {
    render(<Dropdown name="test" optionsDropdown={optionList} />)
    expect(screen.getByRole('combobox')).toHaveLength(2)
  })

  it('should render a dropdown with a selected option', () => {
    render(<Dropdown name="test" optionsDropdown={optionList} />)
    expect(screen.getByRole('combobox')).toHaveValue('element-1')
  })

  it('should display the second option when clicked', () => {
    render(<Dropdown name="test" optionsDropdown={optionList} />)
    userEvent.click(screen.getByRole('combobox'))
    expect(screen.getByRole('option', { name: 'element-2' })).toBeInTheDocument()
  })
})
