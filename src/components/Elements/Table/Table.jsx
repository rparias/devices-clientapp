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
        <DataRow systemName="SUSAN-DESKTOP" type="Windows Workstation" hddCapacity={128} />
        <DataRow systemName="MAC-LOCAL-FREDDY" type="Mac" hddCapacity={512} />
        <DataRow systemName="smart-server" type="Windows Server" hddCapacity={1024} />
        <DataRow systemName="ronald-mac" type="Mac" hddCapacity={256} />
      </tbody>
    </TableContainer>
  )
}

export default Table
