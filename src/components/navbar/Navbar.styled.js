import styled from "@emotion/styled"

export const StyledNavbar = styled.div`

  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.MOBILE}) {
    height: 150px; 
  }
`;