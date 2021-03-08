import React from 'react'
import PropTypes from 'prop-types'
import {StyledBanner, Image} from './Banner.styled'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Banner = ({ children, image, alt }) => {
  const img = getImage(image)
   return(
  <StyledBanner image={image}>
    <Image>
      <GatsbyImage image={img} alt={alt} />
    </Image>
    
    {children}      
  </StyledBanner>
)
   }
Banner.propTypes = {
  title: PropTypes.string
}

export default Banner
