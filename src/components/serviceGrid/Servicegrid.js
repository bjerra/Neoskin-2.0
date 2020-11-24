import React from 'react'
import PropTypes from 'prop-types'
import { useCategoryData } from '../CategoryData'
import {StyledServiceGrid} from './ServiceGrid.styled'


const ServiceGrid = ({gridItems}) => {
    const categoryData = useCategoryData()
    return (

    <StyledServiceGrid>
    {categoryData.map(({title, services}, index) => (
        <section key={title}>
          <div className="content">      
             
              <p>{title}</p>
          </div>         
        </section>
    ))}
  </StyledServiceGrid>
)}

ServiceGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default ServiceGrid
