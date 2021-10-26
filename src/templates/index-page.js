import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { useTheme  } from '@emotion/react'
import Content, { HTMLContent } from '../components/Content'
import { Wrapper,Intro} from './styles/Styled.Indexpage'
import {Banner, Logo, Divider, Layout, BokaButton} from '../components'

const IndexPageTemplate = ({
  image,
  title,
  subtitle,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content
  const theme = useTheme();
  return(
  <Wrapper theme={theme}>
    <Banner image = {image} alt="Neoskin" position={"50% 10%"} height="20rem">
        <Logo size={300}/>    
        {//<video autoPlay loop muted playsInline src={require("../img/banner.webm")}></video>
        }
    </Banner>

    <Intro theme={theme}>
    
      <div className="inner">     
      <header>
        <h1>{title}</h1>
       
        <h5>{subtitle}</h5>
        <Divider fillColor={theme.COLOR.DIM_BLUE} color={theme.COLOR.BACKGROUND} height={5} size={5} invert/>
        <Divider fillColor={theme.COLOR.BACKGROUND} color={theme.COLOR.DIM_BLUE} height={6} size={5} invert/>

      </header>     
      <PageContent content={content} className={"body"}/>
     
      </div>  
      
        <div className="button">
        <BokaButton large url="https://www.bokadirekt.se/places/neoskin-33692" size={"22px"}/>
      </div>
    </Intro>
   
  </Wrapper>
)}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const IndexPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark
  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        contentComponent={HTMLContent}
        content={html}
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
      html
      frontmatter {
        title
        subtitle
        image {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
            )
          }
        }
      }
    }
  }
`
