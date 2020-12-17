import styled from "@emotion/styled"

export const StyledMenu = styled.nav`
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: start;
  background: ${({ theme }) => theme.COLOR.DARK.hex};
  height: 100vh;
  overflow-y:auto;
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
      
      align-items:center;
    }
    
      color: ${({ theme }) => theme.COLOR.LIGHT.hex};
  }

  #service-menu {  
    max-height: ${({ servicesExpanded }) => servicesExpanded ? '600px' : '0'};
    transition: 0.4s;
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

export const ListItem = styled.li`
  margin: 0.5rem;
  border-bottom: 1px solid white;
  a {
    font-size: 1rem;
  }
  transform: ${({ servicesExpanded }) => servicesExpanded ? 'translateX(0)' : 'translateX(100%)'};
  opacity: ${({ servicesExpanded }) => servicesExpanded ? '1' : '0'};
  transition: 0.2s;
  transition-delay: ${({ index })=> index * 50}ms;

`