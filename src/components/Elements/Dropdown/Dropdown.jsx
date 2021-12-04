import React from 'react'
import PropTypes from 'prop-types'
import DropdownContainer from './styles'
import { optionList } from './constants'

const Dropdown = ({ label, name, options }) => {
  const optionsDropdown = options || optionList

  return (
    <DropdownContainer className="flex">
      {label && (
        <label htmlFor={`input-combo-${name}`} data-testid="label-combo">
          {label}
        </label>
      )}

      <select name={name} id={`input-combo-${name}`}>
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
  options: PropTypes.array
}

export default Dropdown
