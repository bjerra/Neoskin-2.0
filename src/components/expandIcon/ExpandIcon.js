import styled from "@emotion/styled"
import React, {useState, useRef} from 'react';
import { useTheme  } from '@emotion/react'

const StyledExpandIcon = styled.div`

position: relative;
margin-left: 1rem;
   
  div{
      position: absolute;
      top: 50%;
      left: 50%;
      width: 1rem;
      height: 0.05rem;
      background-color: ${({ theme, expanded }) => expanded ? theme.COLOR.HOVER.hex : theme.COLOR.MENU_INVERT.hex};
      border-radius: 5px;
      transition: all 0.2s ease-out;

      :first-of-type {
          transform: translate(-50%, -50%) ${({ expanded }) => expanded ? 'rotate(0)' : 'rotate(180deg)'};
        }
    
        :nth-of-type(2) {
            transform: translate(-50%, -50%) ${({ expanded }) => expanded ? 'rotate(0)' : 'rotate(270deg)'};
        }
  }
  
`

const ExpandIcon = ({expanded}) => {
    const theme = useTheme()
  return (
        <StyledExpandIcon expanded={expanded} theme={theme}>
            <div />
            <div />   
        </StyledExpandIcon>   
  )
}

export default ExpandIcon;

