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
      justify-content: space-around;
      align-items: center;    
      background-color: white;
    }

    a{
        color: ${({ theme }) => theme.COLOR.DARK.hex};
    }
`;

export const Primary = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex:2;
   
`;

export const Secondary = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex:1;
`;

