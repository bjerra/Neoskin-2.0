import React from 'react';
import { useTheme  } from '@emotion/react'
import styled from "@emotion/styled"

const Button = ({ onClick, expanded, title }) => {
  const theme = useTheme()
  return (
    <StyledExpandable theme={theme} expanded={expanded} onClick={onClick}>
        {title}
        <div />
        <div />       
    </StyledExpandable>
  )
}

const StyledExpandable = styled.div`
  
    font-size: 1.5rem;
    font-weight: bold;
    color: ${({ theme }) => theme.COLOR.DARK.hex};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.BREAKPOINTS.MOBILE}) {
        font-size: 1rem;

    }

  position: relative;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  
  div{
    width: 1.5rem;
    height: 0.15rem;
    margin-top: -.3rem;
    top: 50%;
    background: ${({ theme, expanded }) => expanded ? theme.COLOR.HOVER.hex : theme.COLOR.LIGHT.hex};
    border-radius: 5px;
    transition: all 0.2s ease-out;
    position: absolute;
    right: 0;

    :first-of-type {
      transform: ${({ expanded }) => expanded ? 'rotate(0)' : 'rotate(180deg)'};
    }

  :nth-of-type(2) {
    transform: ${({ expanded }) => expanded ? 'rotate(0)' : 'rotate(270deg)'};
  }
}
  
  
}
`


export default Button;