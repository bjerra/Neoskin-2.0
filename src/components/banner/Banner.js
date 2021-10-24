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
        <Divider fillColor={theme.COLOR.DARK} color={theme.COLOR.DARK} height={5} size={6} invert/>
        <Divider fillColor={theme.COLOR.MISTY_BLUE} color={theme.COLOR.DARK} height={6} size={10} invert/>
        <Divider fillColor={theme.COLOR.DIM_BLUE} color={theme.COLOR.MISTY_BLUE} height={10} size={15} invert/>
        <Divider fillColor={theme.COLOR.INFO} color={theme.COLOR.DIM_BLUE} height={20} size={30} invert/>
        <Divider fillColor={theme.COLOR.BACKGROUND} color={theme.COLOR.INFO} height={35} size={40} invert/>
     </div>
 
)
   }
Banner.propTypes = {
  title: PropTypes.string
}

export default Banner
