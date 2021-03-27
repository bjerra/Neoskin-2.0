import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Wrapper,Intro,Highlights, CTA, Services, About, Salon} from './styles/Styled.Indexpage'
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
   
    <Intro color={"#fff"}>
      <div className="inner">     
      <header>
        <h1>{title}</h1>
        <p>
          {description}
        </p>
      </header>     
      </div>  
    </Intro>
    <Divider fromColor={"#fff"} toColor={"#d2e0f1"} text={"Favoriter"} height={30}/>
    <Highlights color={"#d2e0f1"}>
        {features && <Features services={features} />}
    </Highlights>
    <Divider fromColor={"#d2e0f1"} toColor={"#fffbe3"} text={"Behandlingar"} height={10}/>
    <Services color={"#fffbe3"}>
      <ServiceGrid data={categories}/>       
    </Services>

    <Divider fromColor={"#fffbe3"} toColor={"#e0f9e8"} text={"Om Mig"} height={20}/>
    <About color={"#e0f9e8"}>

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
    <CTA color={"#e0f9e8"}>
        <GatsbyImage image={getImage(image3)} alt={"nyhetsbrev"} />
      <div className="inner">          
        <EmailList />
      </div>
    </CTA>
    
    <Divider fromColor={"#e0f9e8"} toColor={"#fff"} text={"Salongen"} height={0}/>
    <Salon color={"#fff"}>
        <Tour/>
    </Salon>
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
