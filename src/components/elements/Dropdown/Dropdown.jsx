import React from 'react'
import PropTypes from 'prop-types'
import DropdownContainer from './styles'

const Dropdown = ({ label, name, optionsDropdown, onChange }) => {
  return (
    <DropdownContainer className="flex">
      {label && (
        <label htmlFor={`input-combo-${name}`} data-testid="label-combo">
          {label}
        </label>
      )}

      <select name={name} id={`input-combo-${name}`} onChange={onChange}>
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
  onChange: PropTypes.func
}

export default Dropdown
