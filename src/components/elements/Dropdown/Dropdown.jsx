import React from 'react'
import PropTypes from 'prop-types'
import DropdownContainer from './styles'

const Dropdown = ({ label, name, optionsDropdown, onChange, value }) => {
  return (
    <DropdownContainer className="flex">
      {label && (
        <label htmlFor={`input-combo-${name}`} data-testid="label-combo">
          {label}
        </label>
      )}

      <select name={name} id={`input-combo-${name}`} onChange={onChange} value={value}>
        {optionsDropdown.map((option) => (
          <option key={option.id} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </DropdownContainer>
  )
}

Dropdown.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  optionsDropdown: PropTypes.array.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string
}

export default Dropdown
