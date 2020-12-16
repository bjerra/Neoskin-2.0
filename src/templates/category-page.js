import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import {Layout} from '../components'
import { Wrapper} from './styles/Styled.categorypage'

export const CategoryPageTemplate = ({
  image,
  title,
  description,
}) => {
      
  return(
    <Wrapper image={image.childImageSharp.fluid.src}>
    <div>
      <h1>
        {title}
      </h1>
        <p>{description}</p>
      </div>  
  </Wrapper>
  )
}

CategoryPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
}

const CategoryPage = ({ data, pageContext }) => {

  const category = data.dataJson.categories.find(p=>p.title == pageContext.id)
  const {title, image, description} = category;

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
  query CategoryPage {
    dataJson {
      categories {
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