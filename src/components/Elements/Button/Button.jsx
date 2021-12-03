import React from 'react'
import PropTypes from 'prop-types'
import ButtonContainer from './styles'

const Button = ({ type = 'button', variant = 'primary', size = 'md', ...props }) => {
  return (
    <ButtonContainer type={type} className="uppercase bg-blue text-white">
      {props.children}
    </ButtonContainer>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Button
