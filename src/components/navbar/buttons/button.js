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
  
   

`


export default Button;