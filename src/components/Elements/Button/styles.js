import styled from 'styled-components'

const ButtonContainer = styled.button`
  padding: 0.5em 2em;
  border: none;
  text-decoration: none;

  :hover {
    cursor: pointer;
    background: hsl(var(--clr-white) / 0.15);
  }
`

export default ButtonContainer
