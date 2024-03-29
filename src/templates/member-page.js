import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import {Layout, Banner} from '../components'
import { Wrapper, Body} from './styles/Styled.memberpage'
import EmailList from '../components/EmailList'

const MemberPageTemplate = ({ image }) => {

  return (
    <Wrapper>
      <Banner image = {image} alt={"nyhetsbrev"} position={"50% 10%"}>
      <h1>Nyhetsbrev</h1>
    </Banner>
    <Body>
    <EmailList/>
      </Body>
     
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
