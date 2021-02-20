import styled from "@emotion/styled"

export const StyledDesktop = styled.nav`
   
    font-size: 1.5rem;

    .sticky-wrapper{ 
      z-index: 100;  
      position: relative;

    }
  
    .sticky .sticky-inner {
      position: fixed; 
      top: 0;
      left: 0;
      right: 0;

    }

    .sticky-inner {
      height: 60px;
      padding: 0 3rem;  
      display: flex;
      justify-content: space-evenly;
      align-items: center;    
      background-color: ${({ theme }) => theme.COLOR.MENU.hex};
      box-shadow: 0 5px 5px 1px rgba(0,0,0,0.15);

      > div {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;

      }
    }

    a{
        color: ${({ theme }) => theme.COLOR.MENU_INVERT.hex};
    }

  
`;


