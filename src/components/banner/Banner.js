import React from 'react'
import PropTypes from 'prop-types'
import {StyledBanner} from './Banner.styled'

const Banner = ({ title }) => (
  <StyledBanner >
        <div className="inner">
            <h1>{title}</h1>				
        </div>   
        <video autoPlay loop muted playsInline src={require("../../img/banner.webm")}></video>
  </StyledBanner>
)

Banner.propTypes = {
  title: PropTypes.string
}

export default Banner
