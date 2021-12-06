import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Button from '../../../components/elements/Button'
import Dropdown from '../../../components/elements/Dropdown'
import InputField from '../../elements/InputField/InputField'
import FormContainer from './styles'
import { optionTypeList } from '../../../data/dropdown_options'
import { validateForm } from './utils'

const Form = ({ handleOnClose, device }) => {
  const initialValues = { name: '', type: 'windows-workstation', capacity: undefined }

  const [formValues, setFormValues] = useState(device || initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleOnSubmit = (e) => {
    e.preventDefault()
    setFormErrors(validateForm(formValues))
    setIsSubmitted(true)
  }

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitted) {
      console.log('Form submitted')
      handleOnClose()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formErrors])

  return (
    <FormContainer>
      <form aria-label="form" onSubmit={handleOnSubmit}>
        <InputField
          label="System Name *"
          placeholder="System Name"
          name="name"
          value={formValues.systemName}
          required={false}
          error={formErrors.name}
          onChange={handleOnChange}
        />
        <InputField
          label="HDD Capacity (GB) *"
          placeholder="HDD Capacity"
          name="capacity"
          value={formValues.hddCapacity}
          type="number"
          required={false}
          error={formErrors.capacity}
          onChange={handleOnChange}
        />
        <Dropdown
          label="Type *"
          name="type"
          value={formValues.type}
          optionsDropdown={optionTypeList}
          onChange={handleOnChange}
        />
        <div className="flex button-container">
          <Button onClick={handleOnClose}>Cancel</Button>
          <Button type="submit">Continue</Button>
        </div>
      </form>
    </FormContainer>
  )
}

Form.propTypes = {
  handleOnClose: PropTypes.func,
  device: PropTypes.shape({
    systemName: PropTypes.string,
    type: PropTypes.string,
    hddCapacity: PropTypes.number
  })
}

export default Form
