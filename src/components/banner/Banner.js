import React from 'react'
import PropTypes from 'prop-types'
import {StyledBanner} from './Banner.styled'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useTheme  } from '@emotion/react'

const Banner = ({ children, image, alt, position, height}) => {
    const img = getImage(image)
    const theme = useTheme();
   return(
     <div>
        <StyledBanner image={image} theme={theme} height={height || "10 rem"}>
          <GatsbyImage image={img} alt={alt} objectPosition={position}/>  
          {children}      
  
        </StyledBanner>
      
     </div>
 
)
   }
Banner.propTypes = {
  title: PropTypes.string
}

export default Banner
