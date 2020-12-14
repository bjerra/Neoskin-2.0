import React from 'react'
import PropTypes from 'prop-types'
import {StyledServiceGrid} from './ServiceGrid.styled'
import { useStaticQuery, graphql, Link } from "gatsby"


const ServiceGrid = () => {
    const data = useStaticQuery(graphql`
    query CategoryQuery {
        allMarkdownRemark(filter: {fields: {slug: {regex: "/(behandlingar/.)/"}}}) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  title
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
          }
      }
  `)
    return (

    <StyledServiceGrid>
        {data.allMarkdownRemark.edges.map(({node}, index) => {
            const{ title, image} = node.frontmatter;
            const {slug } = node.fields;
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

