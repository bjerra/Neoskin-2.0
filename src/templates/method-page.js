import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import {Layout,Banner, Divider} from '../components'
import Content, { HTMLContent } from '../components/Content'
import { Wrapper, Body} from './styles/StyledMethodPage'
import { useTheme } from '@emotion/react'

const MethodPageTemplate = ({ title, image, content, contentComponent }) => {
  const PageContent = contentComponent || Content
  const theme = useTheme()

  return (
        <Wrapper>
            <Banner image={image} alt={"Anaïs"} position={"50% 10%"}>

            </Banner>
            <h1>
                        {title}
            </h1>  
            <Body>
              
                <div className="inner">   
                <Divider fillColor={theme.COLOR.DIM_BLUE} color={theme.COLOR.BACKGROUND} height={5} size={5} invert />
              <Divider fillColor={theme.COLOR.BACKGROUND} color={theme.COLOR.DIM_BLUE} height={6} size={5} invert />
                    <PageContent content={content} />
                </div>  
            </Body>
        </Wrapper>
    
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