import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import { useTheme  } from '@emotion/react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Wrapper,Intro,Highlights, CTA} from './styles/Styled.Indexpage'
import {Banner, Logo, Features, Layout, BokaButton} from '../components'
import EmailList from '../components/EmailList'

const IndexPageTemplate = ({
  image,
  features,
  title,
  subtitle,
  description,
}) => {

  const theme = useTheme();
  return(
  <Wrapper theme={theme}>
    <Banner image = {image} alt="Neoskin">
        <Logo size={300}/>    
        {//<video autoPlay loop muted playsInline src={require("../img/banner.webm")}></video>
        }
    </Banner>

    <Intro theme={theme}>
    
      <div className="inner">     
      <header>
        <h1>{title}</h1>
        <h5>{subtitle}</h5>
      </header>     
      <p>
          {description}
      </p>
      <div className="button">
        <BokaButton large url="https://www.bokadirekt.se/places/neoskin-33692" />
      </div>
      </div>  
     
    </Intro>

    <Highlights color={theme.COLOR.BACKGROUND}>
      {features && <Features services={features} />}
    </Highlights>
    
   

    <CTA theme={theme}>

     <div className="inner">          
       <EmailList />
     </div>
     
    </CTA>

  </Wrapper>
)}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  features: PropTypes.array,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        description={frontmatter.description}
        features={ frontmatter.features}
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
        features{
          id
          title   
          image {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
              )
            }
          }  
          info {
            text
            title
          }
          price
          slug
          time
          category
        }
        
        image {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
            )
          }
        }
        description  
      }
    }
    allCategoriesJson(sort: {fields: id}) {
      nodes {
        title
        slug
        description
        image {
          childImageSharp {
            gatsbyImageData(
              width: 1024
              placeholder: BLURRED
            )
          }
        }
        subCategories{
          title
        }
      }
    }
  }
`
