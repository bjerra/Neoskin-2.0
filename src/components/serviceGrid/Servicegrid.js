import React from 'react'
import {StyledServiceGrid, Card, Image} from './ServiceGrid.styled'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ServiceGrid = ({data}) => {
   
    return (

    <StyledServiceGrid>
        {data.map(({ title, image, slug, subCategories}, index) => { 
           return (
            <Card 
                key={index} 
                to={slug} 
                >      
                <Image>
                    <GatsbyImage image={getImage(image)} alt={title} />
                    <span className="info">  
                        <h4>
                            {title}
                        </h4>   
                            {
                                subCategories.map(element => (
                                    <p>  - {element.title} </p>
                                ))
                            }        
                    </span>
                  
                </Image>               
            </Card>
        )}
        )}
  </StyledServiceGrid>
)}

/*
  
                */

export default ServiceGrid

