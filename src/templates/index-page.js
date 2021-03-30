import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import { useTheme  } from '@emotion/react'
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

  const theme = useTheme();
  return(
  <Wrapper theme={theme}>
    <Banner image = {image} alt="Neoskin">
          <Logo />    
        {//<video autoPlay loop muted playsInline src={require("../img/banner.webm")}></video>
        }
    </Banner>
   
    <Intro theme={theme}>
      <div className="inner">     
      <header>
        <h1>{title}</h1>
        <p>
          {description}
        </p>
      </header>     
      </div>  
    </Intro>
    <Divider fillColor={theme.COLOR.LIGHT.hex} fromColor={"#050505"} toColor={"#252525"} height={30}/>
    <Highlights color={"#252525"}>
    <h1>Favoriter</h1>
        {features && <Features services={features} />}
    </Highlights>
    <Divider fillColor={theme.COLOR.LIGHT.hex} fromColor={"#252525"} toColor={"#151515"} height={20} invert={true}/>
    <Services theme={theme}>
    <h1>Behandlingar</h1>
      <ServiceGrid data={categories}/>       
    </Services>

    <Divider fillColor={theme.COLOR.LIGHT.hex} fromColor={"#050505"} toColor={"#252525"} height={25}/>
    <About theme={theme} color={"#252525"}>
      <h1>Om Mig</h1>
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
    <Divider fillColor={theme.COLOR.LIGHT.hex} fromColor={"#252525"} toColor={"#151515"} height={15} invert={true}/>

    <Salon theme={theme}>
    <h1>Salongen</h1>
      <Tour/>
    </Salon>
    <CTA theme={theme}>
        <GatsbyImage image={getImage(image3)} alt={"nyhetsbrev"} />
      <div className="inner">          
        <EmailList />
      </div>
      
    </CTA>
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
