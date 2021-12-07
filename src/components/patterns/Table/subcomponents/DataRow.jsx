import React from 'react'
import PropTypes from 'prop-types'
import Button from '../../../elements/Button'
import { tableHeaders } from '../constants'

const DataRow = ({ id, systemName, type, hddCapacity, setCurrentDevice, handleOnOpenDialog }) => {
  const getCurrentDevice = () => {
    setCurrentDevice({
      id,
      name: systemName,
      type,
      capacity: hddCapacity
    })
  }
  const handleClickUpdate = () => {
    getCurrentDevice()
    handleOnOpenDialog()
  }
  const handleClickDelete = () => {
    getCurrentDevice()
  }
  return (
    <tr key={id}>
      <td data-label={tableHeaders.SYSTEM_NAME} className="uppercase">
        {systemName}
      </td>
      <td data-label={tableHeaders.TYPE}>{type}</td>
      <td data-label={tableHeaders.HDD_CAPACITY}>{`${hddCapacity} GB`}</td>
      <td data-label={tableHeaders.ACTIONS} className="flex" style={{ justifyContent: 'center' }}>
        <Button variant="secondary" size="sm" onClick={handleClickUpdate}>
          Update
        </Button>
        <Button variant="danger" size="sm" onClick={handleClickDelete}>
          Delete
        </Button>
      </td>
    </tr>
  )
}

DataRow.propTypes = {
  id: PropTypes.string.isRequired,
  systemName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  hddCapacity: PropTypes.string.isRequired,
  setCurrentDevice: PropTypes.func,
  handleOnOpenDialog: PropTypes.func
}

export default DataRow
