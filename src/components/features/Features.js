import React from 'react'
import PropTypes from 'prop-types'
import {StyledFeatures, FeatureCard, Image} from './Features.styled'



const FeatureGrid = ({ services }) => {

  return(
  <StyledFeatures>
    

  </StyledFeatures>
)}

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
