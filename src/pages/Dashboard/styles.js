import styled from 'styled-components'

const DashboardContainer = styled.main`
  padding: 2rem;

  .options {
    @media screen and (max-width: 700px) {
      flex-direction: column;
    }
  }
`

const HeaderContainer = styled.header`
  justify-content: center;
  padding: 1rem 0;
`

export { DashboardContainer, HeaderContainer }
