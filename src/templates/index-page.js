import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import { useTheme  } from '@emotion/react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Wrapper,Intro,Highlights, CTA} from './styles/Styled.Indexpage'
import {Banner, Logo, Features, Layout, Divider, BokaButton} from '../components'
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
          <Logo size={300}/>    
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

    <Divider fillColor={theme.COLOR.BACKGROUND} color={theme.COLOR.LIGHT} height={5} size={5}/>

    <Divider fillColor={theme.COLOR.LIGHT} color={theme.COLOR.INFO} height={10} size={30}/>


    <Divider fillColor={theme.COLOR.INFO} color={theme.COLOR.DIM_BLUE} height={20} size={60}/>
  

    <Divider fillColor={theme.COLOR.DIM_BLUE} color={theme.COLOR.FOOTER} height={35} size={90}/>

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
