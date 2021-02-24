import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Wrapper,Intro,Highlights, CTA, Services, About} from './styles/Styled.Indexpage'
import {Banner, Logo, Features, Layout, ServiceGrid, Divider, Tour, Portrait} from '../components'
import EmailList from '../components/EmailList'
import {useCategoryData} from '../components/CategoryData'

export const IndexPageTemplate = ({
  image,
  image2,
  image3,
  features,
  title,
  description
}) => {

  const categories= useCategoryData();
  return(
  <Wrapper>
   
    <Banner image = {image.childImageSharp.fluid.src}>
        <div className="inner">
          <Logo />    
        </div>   
        {//<video autoPlay loop muted playsInline src={require("../img/banner.webm")}></video>
        }
    </Banner>
   
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
        {features && <Features services={features} />}
          
        
    </Highlights>

    <Services>
      <div className="inner">   
        <h2>Våra Behandlingar</h2>     
        <ServiceGrid data={categories}/>  
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
       <h2>Om</h2>         
      <div className="column">
        <Portrait />
        <p>Anais blablablabl</p>
      </div>
      
      <Tour />
      </div>
    </About>
    <Divider />
  </Wrapper>
)}

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
  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        image2={frontmatter.image2}
        image3={frontmatter.image3}
        title={frontmatter.title}
        features={ frontmatter.features}
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
        features{
          id
          title   
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }  
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
  }
`
