import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import {StyledIndexPage} from './styles/Styled.Indexpage'
import {Banner, Features, Layout} from '../components'

export const IndexPageTemplate = ({
  image,
  title,
  subtitle,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <StyledIndexPage>
    <Banner title={title} />
   
    <section className="wrapper">
      <div className="inner">          
        <Features gridItems={intro.blurbs} />
      </div>
    </section>
  </StyledIndexPage>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  heading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  subheading: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        subtitle
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading   
        subheading     
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
        }
      }
    }
  }
`
