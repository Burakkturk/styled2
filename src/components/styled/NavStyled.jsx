import styled from 'styled-components';

const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({theme}) => theme.breakpoints.md}) {
    flex-direction: column;
  }
  background-color: ${({theme}) => theme.breakpoints.primary};
`;

export default NavStyled;
