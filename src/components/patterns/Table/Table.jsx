import React from 'react'
import PropTypes from 'prop-types'
import TableContainer from './styles'
import DataRow from './subcomponents/DataRow'
import { tableHeaders } from './constants'

const Table = ({ devicesData, setCurrentDevice, handleOnOpenDialog, deleteDevice }) => {
  return (
    <TableContainer>
      {devicesData.length > 0 ? (
        <>
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
            {devicesData.map((device) => (
              <DataRow
                key={device.id}
                id={device.id}
                systemName={device.system_name}
                type={device.type}
                hddCapacity={device.hdd_capacity}
                setCurrentDevice={setCurrentDevice}
                handleOnOpenDialog={handleOnOpenDialog}
                deleteDevice={deleteDevice}
              />
            ))}
          </tbody>
        </>
      ) : (
        <caption>No devices found</caption>
      )}
    </TableContainer>
  )
}

Table.defaultProps = {
  devicesData: []
}

Table.propTypes = {
  devicesData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      system_name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      hdd_capacity: PropTypes.string.isRequired
    })
  ),
  setCurrentDevice: PropTypes.func,
  handleOnOpenDialog: PropTypes.func,
  deleteDevice: PropTypes.func
}

export default Table
