import styled from 'styled-components'

const InputFieldContainer = styled.div`
  justify-content: space-between;
  align-items: center;

  input {
    font-size: var(--fs-400);
    padding: 0.5rem 1rem;
    border: unset;
    border-radius: 0.5rem;
    outline-color: hsl(var(--clr-blue) / 0.5);
    margin: 1rem 0;
  }
`

export default InputFieldContainer
