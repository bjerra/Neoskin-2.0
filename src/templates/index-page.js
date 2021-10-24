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

    <Divider fillColor={theme.COLOR.TEXT} color={theme.COLOR.TEXT} height={5} size={2} invert/>

    <Divider fillColor={theme.COLOR.MUSTARD} color={theme.COLOR.TEXT} height={10} size={10} invert/>


    <Divider fillColor={theme.COLOR.OAK} color={theme.COLOR.MUSTARD} height={20} size={20} invert/>


    <Divider fillColor={theme.COLOR.LIGHT} color={theme.COLOR.OAK} height={35} size={30} invert/>
    <Divider fillColor={theme.COLOR.BACKGROUND} color={theme.COLOR.LIGHT} height={35} size={10} invert/>

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

    <Divider fillColor={theme.COLOR.BACKGROUND} color={theme.COLOR.LIGHT} height={5} size={3}/>

    <Divider fillColor={theme.COLOR.LIGHT} color={theme.COLOR.INFO} height={10} size={10}/>


    <Divider fillColor={theme.COLOR.INFO} color={theme.COLOR.DIM_BLUE} height={15} size={20}/>
  

    <Divider fillColor={theme.COLOR.DIM_BLUE} color={theme.COLOR.MISTY_BLUE} height={15} size={15}/>

    <Divider fillColor={theme.COLOR.MISTY_BLUE} color={theme.COLOR.FOOTER} height={30} size={50}/>

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
