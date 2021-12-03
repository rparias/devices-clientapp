import styled from 'styled-components'

const ButtonContainer = styled.button`
  border: none;
  text-decoration: none;

  &.md {
    padding: 0.5em 2em;
    font-size: var(--fs-400);
  }

  &.sm {
    padding: 0.5em;
    font-size: var(--fs-200);
  }

  &.primary {
    background: hsl(var(--clr-blue));
  }

  &.secondary {
    background: hsl(var(--clr-green));
  }

  &.danger {
    background: hsl(var(--clr-red));
  }

  :hover {
    cursor: pointer;
    background: hsl(var(--clr-white) / 0.15);
  }
`

export default ButtonContainer
