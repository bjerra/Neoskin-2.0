import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useTheme  } from '@emotion/react'
import styled from "@emotion/styled"
import { Link } from "gatsby"

export const StyledLogo = styled(Link)`
  margin: auto;
  height: 200px;
  width: 200px;
  display: flex;
  background-color: transparent;

`

const Logo = () => {
  const theme = useTheme()

  return (   
    <StyledLogo theme={theme} to="/" title="Logo" >
        <StaticImage src="../../img/logo.png" alt="Logo" placeholder="blurred"/>
    </StyledLogo>
  )
}

export default Logo