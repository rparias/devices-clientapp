import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Button from '../../../components/elements/Button'
import Dropdown from '../../../components/elements/Dropdown'
import InputField from '../../elements/InputField/InputField'
import FormContainer from './styles'
import { optionTypeList } from '../../../data/dropdown_options'
import { validateForm } from './utils'
import Api from '../../../helper/api'

const Form = ({ handleOnClose, device }) => {
  const api = new Api()
  const initialValues = { name: '', type: optionTypeList[0].value, capacity: undefined }

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

  const updateDevice = () => {
    console.log('update device')
  }

  const createDevice = async () => {
    try {
      const newDevice = {
        system_name: formValues.name,
        type: formValues.type,
        hdd_capacity: formValues.capacity
      }
      await api.addNewDevice(newDevice)
    } catch (error) {
      console.error(error)
    }
  }

  const handleOnCloseForm = () => {
    handleOnClose()
    window.location.reload(false)
  }

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitted) {
      if (device) {
        updateDevice()
      } else {
        createDevice()
      }
      handleOnCloseForm()
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
    id: PropTypes.string.isRequired,
    system_name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    hdd_capacity: PropTypes.string.isRequired
  })
}

export default Form
