import React from 'react'
import PropTypes from 'prop-types'
import ButtonContainer from './styles'

const Button = ({ type = 'button', variant = 'primary', size = 'md', onClick, ...props }) => {
  return (
    <ButtonContainer
      type={type}
      className={`uppercase text-white ${variant} ${size}`}
      onClick={onClick}
    >
      {props.children}
    </ButtonContainer>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
}

export default Button
