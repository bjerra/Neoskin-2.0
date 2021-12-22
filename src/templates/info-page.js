import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import {Layout,Banner} from '../components'
import Content, { HTMLContent } from '../components/Content'
import { Wrapper, Body} from './styles/StyledInfoPage'
import { useTheme } from '@emotion/react'

const InfoPageTemplate = ({ title, image, content, contentComponent }) => {
  const PageContent = contentComponent || Content
  const theme = useTheme()

  return (
        <Wrapper>
            <Banner image={image} alt={title} position={"50% 30%"} height={"35rem"}>

            </Banner>
         
            <Body>
              <h1>
                  {title}
              </h1>  
                <div className="inner">   
              
                   <PageContent content={content} />
                </div>  
            </Body>
        </Wrapper>
    
  )
}

InfoPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const InfoPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <InfoPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        content={post.html}
      />
    </Layout>
  )
}

InfoPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default InfoPage

export const infoPageQuery = graphql`
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