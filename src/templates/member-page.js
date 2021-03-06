import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import {Layout} from '../components'
import { Wrapper} from './styles/Styled.memberpage'
import EmailList from '../components/EmailList'

export const MemberPageTemplate = ({ image }) => {

  return (
    <Wrapper image={!!image.childImageSharp ? image.childImageSharp.fluid.src : image}>
        <EmailList/>
    </Wrapper>
    
  )
}

MemberPageTemplate.propTypes = {
 
}

const MemberPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <MemberPageTemplate
        image={post.frontmatter.image}
      />
    </Layout>
  )
}

MemberPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default MemberPage

export const aboutPageQuery = graphql`
  query MemberPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
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
