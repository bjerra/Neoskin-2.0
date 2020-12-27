import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Wrapper,Intro,Highlights, CTA, Services, About} from './styles/Styled.Indexpage'
import {Banner, Navbar, Logo, Features, Layout, ServiceGrid, Divider, Tour, Portrait,Map} from '../components'
import EmailList from '../components/EmailList'

export const IndexPageTemplate = ({
  image,
  features,
  title,
  subtitle,
  heading,
  subheading,
  description,
}) => (
  <Wrapper>
    <Banner image = {image.childImageSharp.fluid.src}>
        <div className="inner">
          <Logo />    
        </div>   
        <video autoPlay loop muted playsInline src={require("../img/banner.webm")}></video>
    </Banner>
    <Navbar />
    <Intro>
      <div className="inner">     
      <header>
        <h2>
          {subtitle}
        </h2>
        <p>
          {description}
        </p>
      </header>     
      </div>
      
    </Intro>
    <Divider />
    <Highlights>
        <div className="inner">    
          <Features gridItems={features} />
        </div>
    </Highlights>

    <Services>
      <div className="inner">   
        <h3>Behandlingar</h3>     
        <ServiceGrid />  
      </div>       
    </Services>
    <Divider />
    <CTA>
      <div className="inner">          
        <EmailList />
      </div>
    </CTA>

    <About>
    <div className="inner">  
       <h3>Om</h3>         
      <div className="column">
        <Portrait />
        <p>Anais blablablabl</p>
      </div>
      
      <Tour />
      </div>
    </About>
    <Divider />
    <Map />
  </Wrapper>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  features: PropTypes.array,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  subheading: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  console.log(frontmatter.features)
  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        features={frontmatter.features}
        subtitle={frontmatter.subtitle}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        description={frontmatter.description}
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
        features{
          serviceId 
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        heading   
        subheading      
        description
      }
    }
  }
`
