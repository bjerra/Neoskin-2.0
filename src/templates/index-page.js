import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Wrapper,Intro,Highlights, CTA, Services, About} from './styles/Styled.Indexpage'
import {Banner, Logo, Features, Layout, ServiceGrid, Divider, Tour} from '../components'
import EmailList from '../components/EmailList'

const IndexPageTemplate = ({
  image,
  image3,
  portrait,
  features,
  title,
  description,
  about,
  categories
}) => {

  return(
  <Wrapper>
   
    <Banner image = {image} alt="Neoskin">
          <Logo />    
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
    <Divider>
      <h2>Favoriter</h2> 
     </Divider>
    <Highlights>
        {features && <Features services={features} />}
    </Highlights>

    <Divider>
    <h2>Behandlingar</h2>  
     </Divider>
    <Services>
        <ServiceGrid data={categories}/>       
    </Services>
    <CTA>
     
        <GatsbyImage image={getImage(image3)} alt={"nyhetsbrev"} />
   
      <div className="inner">          
        <EmailList />
      </div>
    </CTA>

    <Divider>
    <h2>Om Mig</h2>     
     </Divider>
    <About>
    <div className="inner">  
          
      <div className="column">
      <GatsbyImage image={getImage(portrait)} alt={"Anais"} />
      </div>
      <div className="column">
        <p>{about}</p>
        <Link to="/om">  
              Läs mer
        </Link> 
      </div>
      </div>
    </About>
    <Divider>
    <h2>Salongen</h2> 
     </Divider>
      <Tour />
  </Wrapper>
)}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  portrait: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  features: PropTypes.array,
  title: PropTypes.string,
  description: PropTypes.string,
  about: PropTypes.string,
  categories: PropTypes.array,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        image3={frontmatter.image3}
        portrait={frontmatter.portrait}
        title={frontmatter.title}
        features={ frontmatter.features}
        description={frontmatter.description}
        about={frontmatter.about}
        categories = {data.allCategoriesJson.nodes}
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
        image3 {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
            )
          }
        }  
        portrait {
          childImageSharp {
            gatsbyImageData(
              width: 2048
              placeholder: BLURRED
            )
          }
        }  
        description
        about
      }
    }
    allCategoriesJson {
      nodes {
        title
        slug
        description
        image {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
            )
          }
        }
      }
    }
  }
`
