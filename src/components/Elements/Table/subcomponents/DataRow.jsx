import React from 'react'
import PropTypes from 'prop-types'
import { tableHeaders } from '../constants'
import Button from '../../Button'

const DataRow = ({ id, systemName, type, hddCapacity }) => {
  return (
    <tr key={id}>
      <td data-label={tableHeaders.SYSTEM_NAME} className="uppercase">
        {systemName}
      </td>
      <td data-label={tableHeaders.TYPE}>{type}</td>
      <td data-label={tableHeaders.HDD_CAPACITY}>{`${hddCapacity} GB`}</td>
      <td data-label={tableHeaders.ACTIONS} className="flex" style={{ justifyContent: 'center' }}>
        <Button variant="secondary" size="sm" onClick={() => {}}>
          Update
        </Button>
        <Button variant="danger" size="sm" onClick={() => {}}>
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
  hddCapacity: PropTypes.number.isRequired
}

export default DataRow
