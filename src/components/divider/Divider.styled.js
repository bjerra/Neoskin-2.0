
import styled from "@emotion/styled"


export const StyledDivider = styled.div`
    
    position: relative;
    height: ${({ size }) => size}px;
    display:flex;
    justify-content: center;
    align-items: center;
    background: ${({ color }) => color};
   
`

export const StartShape = styled.div`
    
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;

    svg {
        position: relative;
        display: block;
        transform-origin: bottom;
        width: calc(100% + ${({ offset }) => 1.3+ offset || 0}px);
        height: ${({ height }) => height}px;
        
    }
    
    .shape-fill {
        fill: ${({ color }) => color};
    }

    @keyframes hideshow {
        0% { transform: translateY(0%); }
        50% { transform:  translateY(10%);}
        100% { transform:  translateY(0%);}
      } 

`


export const EndShape = styled.div`
    
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;

    svg {
        position: relative;
        display: block;
        width: calc(100% + ${({ offset }) => 1.3+ offset || 0}px);
        height: ${({ height }) => height}px;

    }
    
    .shape-fill {
        fill: ${({ color }) => color};
    }
`
