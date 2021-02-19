import styled from "@emotion/styled"

export const StyledDesktop = styled.nav`
   
    font-size: 1.5rem;

    .sticky-wrapper{ 
      z-index: 100;  
      position: relative;
      height: 3rem;
    }
  
    .sticky .sticky-inner {
      position: fixed; 
      top: 0;
      left: 0;
      right: 0;
      height: 3rem;
    }

    .sticky-inner {
      padding: 1rem;  
      display: flex;
      justify-content: space-evenly;
      align-items: center;    
      background-color: ${({ theme }) => theme.COLOR.LIGHT.hex};

      > div {
        
      }
    }

    a{
        color: ${({ theme }) => theme.COLOR.DARK.hex};
    }

  
`;


