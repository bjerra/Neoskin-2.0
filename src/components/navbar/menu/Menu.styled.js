import styled from "@emotion/styled"

export const StyledMenu = styled.nav`
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: start;
  background: ${({ theme }) => theme.COLOR.DARK.hex};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: fixed;
  top: 0;
  right: 0;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in-out;
  
  ul{
    display: flex;
    justify-content: space-around;
  }
  .expandable{
    div:first-of-type {
      display: flex;
      justify-content: space-between;
      align-items:center;
    }
    
      color: ${({ theme }) => theme.COLOR.LIGHT.hex};
  }

  #service-menu {
    height: ${({ servicesExpanded }) => servicesExpanded ? '100px' : '0'};
    opacity: ${({ servicesExpanded }) => servicesExpanded ? '1' : '0'};
    transition: 0.2s;
    overflow: hidden;

    ul {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
    }
    
  }

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.MOBILE}) {
    font-size: 1.5rem;
    text-align: center;     
  }
  div span {
    color: white;
  }

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.MOBILE}) {
    width: 100%;
  }

  section{
    flex: auto;
  }

  > section:first-of-type {
    width: 200px;
    margin: auto;
  }

  > section:last-of-type {
    display: flex;
    flex: 6;
    flex-direction: column;
    justify-content: start;

    > div {
      margin: 1rem 0;
    }
    
  }

  a {
    font-size: 1.75rem;
    text-transform: uppercase; 
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.COLOR.LIGHT.hex};
    text-decoration: none;
    transition: color 0.3s linear;
    

    &:hover {
      color: ${({ theme }) => theme.COLOR.HOVER};
    }
`;