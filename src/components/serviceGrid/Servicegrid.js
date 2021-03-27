import React from 'react'
import {StyledServiceGrid, Card, Image} from './ServiceGrid.styled'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ServiceGrid = ({data}) => {
   
    return (

    <StyledServiceGrid>
        {data.map(({ title, image, slug}, index) => { 
           return (
            <Card 
                key={index} 
                to={slug} 
                >      
                <Image>
                    <GatsbyImage image={getImage(image)} alt={title} />
                </Image>    
                <h3>
                    {title.replace('behandlingar', '-behandlingar')}
                </h3>           
            </Card>
        )}
        )}
  </StyledServiceGrid>
)}

/*
  
                */

export default ServiceGrid

