import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import {Layout} from '../components'

export const CategoryPageTemplate = ({
  image,
  title,
  description,
}) => {
      
  return(
    <div>
    <div>
      <h1>
        {title}
      </h1>
        <p>{description}</p>
      </div>  
  </div>
  )
}

CategoryPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
}

const CategoryPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const image = frontmatter.image 
  const title = frontmatter.title
  const description = frontmatter.description
  return (
    <Layout pageTitle={title} pageDescription={description}>
      <CategoryPageTemplate
        image={image}
        title={title}     
        description={description}     
      />
    </Layout>
  )
}

CategoryPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default CategoryPage

export const categoryPageQuery = graphql`
  query CategoryPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
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
`