import React from 'react'
import PropTypes from 'prop-types'
import {StyledServiceGrid, Card, Image} from './ServiceGrid.styled'

const ServiceGrid = ({data}) => {
   
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
                <h5  
                   >
                    {title}
                </h5>           
            </Card>
        )}
        )}
  </StyledServiceGrid>
)}

/*
  
                */

export default ServiceGrid

