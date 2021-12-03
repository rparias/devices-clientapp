import React from 'react'
import TableContainer from './styles'
import DataRow from './subcomponents/DataRow'
import { tableHeaders } from './constants'

const Table = () => {
  return (
    <TableContainer>
      <caption>Devices List</caption>
      <thead>
        <tr>
          <th scope="col">{tableHeaders.SYSTEM_NAME}</th>
          <th scope="col">{tableHeaders.TYPE}</th>
          <th scope="col">{tableHeaders.HDD_CAPACITY}</th>
          <th scope="col">{tableHeaders.ACTIONS}</th>
        </tr>
      </thead>
      <tbody>
        <DataRow id="1" systemName="SUSAN-DESKTOP" type="Windows Workstation" hddCapacity={128} />
        <DataRow id="2" systemName="MAC-LOCAL-FREDDY" type="Mac" hddCapacity={512} />
        <DataRow id="3" systemName="smart-server" type="Windows Server" hddCapacity={1024} />
        <DataRow id="4" systemName="ronald-mac" type="Mac" hddCapacity={256} />
      </tbody>
    </TableContainer>
  )
}

export default Table
