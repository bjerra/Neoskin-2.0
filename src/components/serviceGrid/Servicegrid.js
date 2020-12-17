import React from 'react'
import PropTypes from 'prop-types'
import {StyledServiceGrid} from './ServiceGrid.styled'
import { Link } from "gatsby"
import {useCategoryData} from '../CategoryData'


const ServiceGrid = () => {
    const data = useCategoryData();

    return (

    <StyledServiceGrid>
        {data.map(({ title, image, slug}, index) => {
           return (
            <section key={index}>  
                <div className="content"
                    style={{
                    backgroundImage: `url(${
                        !!image.childImageSharp ? image.childImageSharp.fluid.src : image
                    })`
                    }}
                >
                    <Link to={slug}><h5> {title}</h5></Link>
                  
                 </div>      
            </section>
        )}
        )}
  </StyledServiceGrid>
)}



export default ServiceGrid

