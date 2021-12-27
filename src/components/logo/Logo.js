import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useTheme  } from '@emotion/react'
import styled from "@emotion/styled"
import { Link } from "gatsby"

export const StyledLogo = styled(Link)`
  margin: auto;
  background-color: transparent;

  .gatsby-image-wrapper {
     width: ${({ size }) => size}rem; 
}

`

const Logo = ({size}) => {
  const theme = useTheme()

  return (   
    <StyledLogo theme={theme} size={size} to="/" title="Logo" >
        <StaticImage src="../../img/logo_Dark.png" alt="Logo" placeholder="blurred"/>
    </StyledLogo>
  )
}

export default Logo