import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Wrapper,Intro,Highlights, CTA, Services, About} from './styles/Styled.Indexpage'
import {Banner, Navbar, Logo, Features, Layout, ServiceGrid, Divider, Tour, Portrait,Map} from '../components'
import EmailList from '../components/EmailList'

export const IndexPageTemplate = ({
  image,
  image2,
  image3,
  features,
  title,
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
        <h1>{title}</h1>
        <p>
          {description}
        </p>
      </header>     
      </div>
      
    </Intro>
    <Divider />
    <Highlights image = {image2.childImageSharp.fluid.src}>
        
          <Features gridItems={features} />
        
    </Highlights>

    <Services>
      <div className="inner">   
        <h3>Behandlingar</h3>     
        <ServiceGrid />  
      </div>       
    </Services>
    <Divider />
    <CTA image = {image3.childImageSharp.fluid.src}>
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
  image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  features: PropTypes.array,
  title: PropTypes.string,
  description: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const features = data.allServicesJson.nodes
  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        image2={frontmatter.image2}
        image3={frontmatter.image3}
        title={frontmatter.title}
        features={features}
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
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image2 {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image3 {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }  
        description
      }
    }
    allServicesJson(filter: {feature: {eq: true}}) {
      nodes {
        id
        title     
        info {
          text
          title
        }
        price
        slug
        time
        url
        category
      }
    }
  }
`
