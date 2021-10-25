import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import {Layout,Banner} from '../components'
import Content, { HTMLContent } from '../components/Content'
import { Wrapper, Body} from './styles/StyledAboutPage'

const AboutPageTemplate = ({ title, image, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <Wrapper>
       <Banner image={image} alt={"Metod"}>

       </Banner>
       <h1>
            {title}
        </h1>  
       <Body>
        <div className="inner">   
        
          <PageContent content={content} />
         
        </div>  
        <p className="signature">Anaïs</p>
      </Body>
    </Wrapper>
    
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        content={post.html}
      />
    </Layout>
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
