import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '../../../elements/Button'
import { tableHeaders } from '../constants'
import AlertDialog from '../../AlertDialog'
import { deleteDevice } from '../../../../helper/api/deleteDevice'

const DataRow = ({
  id,
  systemName,
  type,
  hddCapacity,
  setCurrentDevice,
  handleOnOpenDialog,
  deleteDevice: onDeleteDevice
}) => {
  const [openAlert, setOpenAlert] = useState(false)

  const handleClose = () => {
    setOpenAlert(false)
  }

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
    setOpenAlert(true)
  }

  const handleDelete = async () => {
    try {
      const result = await deleteDevice(id)
      if (result.status === 200) {
        onDeleteDevice(id)
        handleClose()
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
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
      <AlertDialog open={openAlert} handleOnClose={handleClose} handleDelete={handleDelete} />
    </>
  )
}

DataRow.propTypes = {
  id: PropTypes.string.isRequired,
  systemName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  hddCapacity: PropTypes.string.isRequired,
  setCurrentDevice: PropTypes.func,
  handleOnOpenDialog: PropTypes.func,
  deleteDevice: PropTypes.func
}

export default DataRow
