import React from 'react'
import PropTypes from 'prop-types'
import Button from '../../../components/elements/Button'
import Dropdown from '../../../components/elements/Dropdown'
import InputField from '../../elements/InputField/InputField'
import FormContainer from './styles'
import { optionTypeList } from '../../../data/dropdown_options'

const Form = ({ handleOnClose }) => {
  const handleOnSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted')
    handleOnClose()
  }

  return (
    <FormContainer>
      <form aria-label="form">
        <InputField label="System Name *" name="name" required={true} />
        <InputField label="HDD Capacity (GB) *" name="capacity" type="number" required={true} />
        <Dropdown label="Type *" name="type" optionsDropdown={optionTypeList} />
        <div className="flex button-container">
          <Button onClick={handleOnClose}>Cancel</Button>
          <Button type="submit" onClick={handleOnSubmit}>
            Continue
          </Button>
        </div>
      </form>
    </FormContainer>
  )
}

Form.propTypes = {
  handleOnClose: PropTypes.func
}

export default Form
