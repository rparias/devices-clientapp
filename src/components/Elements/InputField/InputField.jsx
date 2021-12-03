import React from 'react'
import PropTypes from 'prop-types'
import InputFieldContainer from './styles'

const InputField = ({
  label,
  name,
  value,
  placeholder,
  type = 'text',
  required = false,
  onChange
}) => {
  return (
    <InputFieldContainer>
      {label && (
        <label htmlFor={`input-field-${name}`} data-testid="label-element">
          {label}
        </label>
      )}
      <input
        id={`input-field-${name}`}
        type={type}
        value={value}
        name={name}
        className="form-control"
        placeholder={placeholder}
        onChange={onChange}
        required={required}
      />
    </InputFieldContainer>
  )
}

InputField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func
}

export default InputField
