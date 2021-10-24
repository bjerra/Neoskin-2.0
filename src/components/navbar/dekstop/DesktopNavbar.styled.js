import styled from "@emotion/styled"

export const StyledDesktop = styled.nav`
   
    z-index:100;
    font-size: 1.35rem;
    position: fixed; 
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    padding: 0 3rem;  
    display: flex;
    justify-content: space-around;
    align-items: center;    
    background-color: ${({ theme }) => theme.COLOR.MENU_BACKGROUND};
    box-shadow: 0 5px 5px 1px rgba(0,0,0,0.15);

    > div {
      flex: 1;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;


    }

    > a{
      flex: 1;
        color: ${({ theme }) => theme.COLOR.MENU_TEXT};
        :hover {
          color: ${({ theme }) => theme.COLOR.MENU_TEXT};
        }
    }

  
`;


