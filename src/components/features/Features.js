import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage'
import {StyledFeatures} from './Features.styled'


const FeatureGrid = ({ gridItems }) => (
  <StyledFeatures>
    {gridItems.map(item => (
        <section key={item.text}>
          <div className="content">      
              <PreviewCompatibleImage imageInfo={item} />
              <p>{item.text}</p>
          </div>         
        </section>
    ))}
  </StyledFeatures>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
