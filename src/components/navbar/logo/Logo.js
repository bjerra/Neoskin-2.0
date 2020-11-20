import React from "react"
import Img from "gatsby-image"
import { StyledLogo } from './Logo.styled';
import { useStaticQuery, graphql } from "gatsby"
import { useTheme  } from '@emotion/react'

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "logo" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid(maxWidth: 200, pngQuality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const theme = useTheme()

  return (   
      <StyledLogo theme={theme} to="/" title="Logo" >
            <Img fluid={data.file.childImageSharp.fluid} alt="logo" />
    </StyledLogo>
  )
}

export default Logo