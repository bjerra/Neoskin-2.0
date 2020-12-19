import styled from "@emotion/styled"

export const StyledMenu = styled.nav`
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: start;
  background: ${({ theme }) => theme.COLOR.BLUE.hex};
  height: 100vh;
  width: 25%;
  overflow-y:auto;
  text-align: left;
  position: fixed;
  top: 0;
  right: 0;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in-out;
  
  ::-webkit-scrollbar {
    display: none;
  }

  ul{
    display: flex;
    justify-content: space-around;
  }

  #service-menu {  
    flex: ${({ servicesExpanded }) => servicesExpanded ? '1' : '0'};
    overflow: hidden;
    transition: all 0.3s ease-out;
    height: auto;
    justify-content: flex-start;
    flex-direction: column;   
    a {
      font-weight: 100 !important;
      font-size: 1.25rem;   
      margin-left: 1rem;
      @media (max-width: ${({ theme }) => theme.BREAKPOINTS.MOBILE}) {
        font-size: 1rem;
        margin-left: 0;
      }
    }

  }

  div span {
    color: white;
  }

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.MOBILE}) {
    width: 100%;
    text-align: center;   
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
      margin: 1rem 1rem;
    }
    
  }

  li{
    margin: 0.5rem 1rem;
  }

  a {
    font-size: 1.75rem;
    text-transform: uppercase; 
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.COLOR.LIGHT.hex};
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: ${({ theme }) => theme.BREAKPOINTS.MOBILE}) {
      font-size: 1.3rem;
       
    }

    &:hover {
      color: ${({ theme }) => theme.COLOR.HOVER.hex};
    }
`;

export const ListItem = styled.li`
  padding: 5px;  
  a {
    font-size: 1rem;
  }
  border-bottom: 1px solid #ddd;
  transform: ${({ servicesExpanded }) => servicesExpanded ? 'translateX(0)' : 'translateX(100%)'};
  opacity: ${({ servicesExpanded }) => servicesExpanded ? '1' : '0'};
  transition: all 0.2s ease-out;
  transition-delay: ${({ index })=> index * 25}ms;

`

export const Expandable = styled.div`
  
  position: relative;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  color: ${({ theme }) => theme.COLOR.LIGHT.hex};
  
  div{
    width: 1.5rem;
    height: 0.15rem;
    margin-top: -.3rem;
    top: 50%;
    background: ${({ theme, servicesExpanded }) => servicesExpanded ? theme.COLOR.HOVER.hex : theme.COLOR.LIGHT.hex};
    border-radius: 5px;
    transition: all 0.2s ease-out;
    position: absolute;
    right: 0;

    :first-of-type {
      transform: ${({ servicesExpanded }) => servicesExpanded ? 'rotate(0)' : 'rotate(180deg)'};
    }

  :nth-of-type(2) {
    transform: ${({ servicesExpanded }) => servicesExpanded ? 'rotate(0)' : 'rotate(270deg)'};
  }
}
  
  
}
`

