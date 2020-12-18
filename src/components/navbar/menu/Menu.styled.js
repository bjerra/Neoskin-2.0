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
      display: flex;     
      align-items:center;
      color: ${({ theme }) => theme.COLOR.LIGHT.hex};
  }

  #service-menu {  
    flex: ${({ servicesExpanded }) => servicesExpanded ? '1' : '0'};
    overflow: hidden;
    transition: all 0.3s ease-out;
    height: auto;
    justify-content: flex-start;
    flex-direction: column;   
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
    div{
      flex: 0;
    }
  }

  > section:first-of-type {
    width: 200px;
    margin: auto;
  }

  > section:last-of-type {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 650px;

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
  padding: 5px 0;  
  a {
    font-size: 1rem;
  }
  border-bottom: 1px solid #ddd;
  transform: ${({ servicesExpanded }) => servicesExpanded ? 'translateX(0)' : 'translateX(100%)'};
  opacity: ${({ servicesExpanded }) => servicesExpanded ? '1' : '0'};
  transition: all 0.2s;
  transition-delay: ${({ index })=> index * 25}ms;

`