import styled from 'styled-components';

const HeaderStyled = styled.header`
display: flex;
justify-content: center;
align-items: center;
@media (max-width: ${({theme}) => theme.breakpoints.md}) {
    flex-direction: column;
  }

  & div {
    flex: 2;
  } img {
    flex: 1;
  }
`;

export default HeaderStyled;
