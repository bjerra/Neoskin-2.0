import React from 'react'
import PropTypes from 'prop-types'
import {StyledBanner} from './Banner.styled'

const Banner = ({ children, image }) => (
  <StyledBanner image={image}>
    {children}      
  </StyledBanner>
)

Banner.propTypes = {
  title: PropTypes.string
}

export default Banner
