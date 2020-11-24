import React from "react"
import Img from "gatsby-image"
import { StyledPortrait } from './Portrait.styled'
import { useStaticQuery, graphql } from "gatsby"
import { useTheme  } from '@emotion/react'

const Portrait = ({}) => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "anais" }, extension: { eq: "jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300, pngQuality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const theme = useTheme()

  return (   
      <StyledPortrait theme={theme}>
            <Img fluid={data.file.childImageSharp.fluid} alt="Anais" />
        </StyledPortrait>
  )
}

export default Portrait