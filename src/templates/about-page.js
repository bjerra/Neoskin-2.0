import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import  { HTMLContent } from '../components/Content'
import AboutPageTemplate from './pages/aboutPage'

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        content={post.html}
      />
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
            )
          }
        }
      }
    }
  }
`
