import React from 'react'
import PropTypes from 'prop-types'
import {StyledServiceGrid, Card, Image} from './ServiceGrid.styled'
import {useCategoryData} from '../CategoryData'


const ServiceGrid = () => {
    const data = useCategoryData();

    return (

    <StyledServiceGrid>
        {data.map(({ title, image, slug}, index) => {
           return (
            <Card 
                key={index} 
                to={slug} 
                >      
                <Image 
                    fluid={image.childImageSharp.fluid} 
                    alt={title} 
                  
                    />    
                <h4  
                   >
                    {title}
                </h4>           
            </Card>
        )}
        )}
  </StyledServiceGrid>
)}

/*
  
                */

export default ServiceGrid

