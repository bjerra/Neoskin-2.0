
import styled from "@emotion/styled"


export const StyledDivider = styled.div`
    
    position: relative;
    height: 35px;
    display:flex;
    justify-content: center;
    align-items: center;
    background: ${({ fromColor, toColor }) => `linear-gradient(${fromColor}, ${toColor})`};
   
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
        width: calc(100% + 1.3px);
        height: ${({ height }) => height}px;
    }
    
    .shape-fill {
        fill: ${({ color }) => color};
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
        width: calc(100% + 1.3px);
        height: ${({ height }) => height}px;
    }
    
    .shape-fill {
        fill: ${({ color }) => color};
    }
        

`
