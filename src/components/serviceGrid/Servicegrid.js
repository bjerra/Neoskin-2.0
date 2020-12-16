import React from 'react'
import PropTypes from 'prop-types'
import {StyledServiceGrid} from './ServiceGrid.styled'
import { useStaticQuery, graphql, Link } from "gatsby"


const ServiceGrid = () => {
    const data = useStaticQuery(graphql`
    query CategoryQuery {
      dataJson {
        categories {
          title
          slug
          description
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
    return (

    <StyledServiceGrid>
        {data.dataJson.categories.map((category, index) => {
            const{ title, image, slug} = category;
           return (
            <section key={index}>
            <div className="content"
                    style={{
                    backgroundImage: `url(${
                        !!image.childImageSharp ? image.childImageSharp.fluid.src : image
                    })`
                    }}
                >
                   <Link to={slug}>
                   {title}
                  </Link>  
            </div>         
            </section>
        )}
        )}
  </StyledServiceGrid>
)}



export default ServiceGrid

