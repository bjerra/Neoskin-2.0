import React from 'react'
import PropTypes from 'prop-types'
import {StyledBanner} from './Banner.styled'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {Divider} from '../../components'
import { useTheme  } from '@emotion/react'

const Banner = ({ children, image, alt }) => {
  const img = getImage(image)
  const theme = useTheme();
   return(
     <div>
        <StyledBanner image={image}>
    <GatsbyImage image={img} alt={alt} />  
    {children}      
  
  </StyledBanner>
  <Divider fillColor={theme.COLOR.TEXT} color={theme.COLOR.TEXT} height={5} size={2} invert/>
        <Divider fillColor={theme.COLOR.MUSTARD} color={theme.COLOR.TEXT} height={10} size={10} invert/>
        <Divider fillColor={theme.COLOR.OAK} color={theme.COLOR.MUSTARD} height={20} size={20} invert/>
        <Divider fillColor={theme.COLOR.BACKGROUND} color={theme.COLOR.OAK} height={35} size={30} invert/>
     </div>
 
)
   }
Banner.propTypes = {
  title: PropTypes.string
}

export default Banner
