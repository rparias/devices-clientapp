import React from 'react'
import { render, screen } from '@testing-library/react'
import Table from '../Table'

describe('Table Component', () => {
  it('should render an empty table if there is no data passed as prop', () => {
    render(<Table />)
    expect(screen.getByText('No devices found')).toBeInTheDocument()
  })

  it('should render a table with the data passed as prop', () => {
    const data = [
      {
        id: 'e8okoP2l5',
        system_name: 'DESKTOP-SMART',
        type: 'WINDOWS_WORKSTATION',
        hdd_capacity: '10'
      },
      {
        id: 'Th3ngERn9',
        system_name: 'MAC-LEADER',
        type: 'MAC',
        hdd_capacity: '2048'
      }
    ]
    render(<Table devicesData={data} />)
    expect(screen.getByText('DESKTOP-SMART')).toBeInTheDocument()
    expect(screen.getByText('MAC-LEADER')).toBeInTheDocument()
  })
})
