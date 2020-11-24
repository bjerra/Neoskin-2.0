import React from 'react'
import PropTypes from 'prop-types'
import {StyledBanner} from './Banner.styled'
import {default as Logo} from "../logo";

const Banner = ({ title }) => (
  <StyledBanner >
        <div className="inner">
          <Logo />    
        </div>   
        <video autoPlay loop muted playsInline src={require("../../img/banner.webm")}></video>
  </StyledBanner>
)

Banner.propTypes = {
  title: PropTypes.string
}

export default Banner
