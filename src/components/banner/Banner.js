import React from 'react'
import PropTypes from 'prop-types'
import {StyledBanner} from './Banner.styled'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {Divider} from '../../components'
import { useTheme  } from '@emotion/react'

const Banner = ({ children, image, alt, position, height}) => {
    const img = getImage(image)
    const theme = useTheme();
   return(
     <div>
        <StyledBanner image={image} theme={theme} height={height || "10rem"}>
          <GatsbyImage image={img} alt={alt} objectPosition={position}/>  
          {children}      
  
        </StyledBanner>
        <Divider fillColor={theme.COLOR.DARK} color={theme.COLOR.DARK} height={30} size={5} invert/>
        <Divider fillColor={theme.COLOR.MISTY_BLUE} color={theme.COLOR.DARK} height={30} size={10} invert/>
        <Divider fillColor={theme.COLOR.DIM_BLUE} color={theme.COLOR.MISTY_BLUE} height={30} size={5} invert/>
        <Divider fillColor={theme.COLOR.INFO} color={theme.COLOR.DIM_BLUE} height={20} size={10} invert/>
        <Divider fillColor={theme.COLOR.LIGHT} color={theme.COLOR.INFO} height={35} size={30} invert/>
        <Divider fillColor={theme.COLOR.BACKGROUND} color={theme.COLOR.LIGHT} height={25} size={3} invert/>
     </div>
 
)
   }
Banner.propTypes = {
  title: PropTypes.string
}

export default Banner
