import React from 'react';
import { Link } from 'gatsby'
import { useTheme  } from '@emotion/react'
import styled from "@emotion/styled"

const Button = ({ title, to }) => {
  const theme = useTheme()
  return (
    <StyledLink theme={theme} to={to}>  
                {title}
    </StyledLink>
  )
}


const StyledLink = styled(Link)`
  
    font-size: 1.5rem;
    font-weight: bold;
    color: ${({ theme }) => theme.COLOR.DARK.hex};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.BREAKPOINTS.MOBILE}) {
        font-size: 1rem;
    
    }
`


export default Button;