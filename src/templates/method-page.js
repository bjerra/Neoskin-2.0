import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import {Layout,Banner} from '../components'
import Content, { HTMLContent } from '../components/Content'

const MethodPageTemplate = ({ title, image, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
       <Banner image={image} alt={"Anais"}>
        <h1
          className="page-title"
        >
          {title}
        </h1>
        </Banner>
        <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">                   
              <PageContent className="content" content={content} />
            </div>

        </div>
      </div>
    </section>
    </div>
    
  )
}

MethodPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const MethodPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <MethodPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        content={post.html}
      />
    </Layout>
  )
}

MethodPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default MethodPage

export const methodPageQuery = graphql`
  query MethodPage($id: String!) {
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