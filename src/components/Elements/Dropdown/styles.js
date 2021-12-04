import styled from 'styled-components'

const DropdownContainer = styled.div`
  justify-content: space-between;
  align-items: center;

  select {
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    outline-color: hsl(var(--clr-blue) / 0.5);
    margin: 1rem 0;
  }
`

export default DropdownContainer
