import styled from "@emotion/styled"

export const StyledMenu = styled.nav`
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.COLOR.LIGHT.hex};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in-out;
  
  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.MOBILE}) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.COLOR.DARK.hex};
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: ${({ theme }) => theme.BREAKPOINTS.MOBILE}) {
      font-size: 1.5rem;
      text-align: center;     
    }

    &:hover {
      color: ${({ theme }) => theme.COLOR.HOVER};
    }
  }
`;