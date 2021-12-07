import React from 'react'
import PropTypes from 'prop-types'
import MultipleSelectContainer from './styles'
import OutlinedInput from '@mui/material/OutlinedInput'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'

const MultipleSelect = ({ value, onChange, options, label }) => {
  return (
    <MultipleSelectContainer className="flex">
      {label && (
        <label htmlFor="demo-multiple-name-label" data-testid="label-combo">
          {label}
        </label>
      )}
      <Select
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        multiple
        value={value}
        onChange={onChange}
        input={<OutlinedInput label="All" />}
        style={{ backgroundColor: '#fff', height: '2.5rem' }}
      >
        {options.map((deviceType) => (
          <MenuItem key={deviceType.id} value={deviceType.value}>
            {deviceType.value}
          </MenuItem>
        ))}
      </Select>
    </MultipleSelectContainer>
  )
}

MultipleSelect.propTypes = {
  value: PropTypes.array,
  onChange: PropTypes.func,
  options: PropTypes.array,
  label: PropTypes.string
}

export default MultipleSelect
