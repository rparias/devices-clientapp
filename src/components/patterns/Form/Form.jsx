import React from 'react'
import Button from '../../../components/elements/Button'
import Dropdown from '../../../components/elements/Dropdown'
import InputField from '../../elements/InputField/InputField'
import FormContainer from './styles'

const Form = () => {
  return (
    <FormContainer>
      <form aria-label="form">
        <InputField label="System Name *" name="name" required={true} />
        <InputField label="HDD Capacity (GB) *" name="capacity" type="number" required={true} />
        <Dropdown label="Type *" name="type" />
        <div className="flex">
          <Button type="submit" onClick={(e) => e.preventDefault()}>
            Continue
          </Button>
        </div>
      </form>
    </FormContainer>
  )
}

export default Form
