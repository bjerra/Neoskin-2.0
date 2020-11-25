
import styled from "@emotion/styled"


export const StyledDivider = styled.div`
    
        padding: 2rem;
        color: #333;
        text-align: center;
        transition: opacity 0.3s linear;
        display: flex;
        justify-content: center;
        align-items: center;

        &::before,
        &::after {
          content: '';
          display: block;
          height: 0.09em;
          min-width: 30vw;
        }
        
        &::before {
          background: linear-gradient(to right, rgba(240,240,240,0), #333);
          margin-right: 4vh;
          
        }
        
        &::after {
          background: linear-gradient(to left, rgba(240,240,240,0), #333);
          margin-left: 4vh;
        } 

`