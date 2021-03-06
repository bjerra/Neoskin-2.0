import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import {Layout, Banner, BokaButton} from '../components'
import { Wrapper, ServiceCard, Body} from './styles/Styled.categorypage'
import { useTheme  } from '@emotion/react'

export const CategoryPageTemplate = ({
  image,
  title,
  description,
  services
}) => {

  const theme = useTheme()
  return(
    <Wrapper>
      <Banner image={!!image.childImageSharp ? image.childImageSharp.fluid.src : image}>
        <h1>{title}</h1>
      </Banner>  
      <Body>
        <p>{description}</p>
        {
          services.map((service) => (                            
              <ServiceCard key={service.id} theme={theme}>
              <Link  
                  to={`/behandlingar/${service.slug}`} 
                  state={{modal: true}}>
                <h4>{service.title}</h4>
                <div>
                  <p>
                    {service.time} , {service.price} 
                  </p> 
                  
                </div>
                <span>mer info</span> 
              </Link>
              <div>
                  <BokaButton url={service.url}/>    
              </div>
             
           </ServiceCard>                   
          ))
          }    
      </Body>
  </Wrapper>
  )
}

CategoryPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
}

const CategoryPage = ({ data }) => {

  const category = data.categoriesJson
  const services = data.allServicesJson.nodes;
  const {title, image, description} = category;

  return (
    <Layout pageTitle={title} pageDescription={description}>
      <CategoryPageTemplate
        image={image}
        title={title}     
        description={description}     
        services={services}
      />
    </Layout>
  )
}

CategoryPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default CategoryPage

export const categoryPageQuery = graphql`
  query CategoryPage($id: String!) {
    categoriesJson(title: {eq: $id}) {
      title
      description
      image {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    allServicesJson(filter: {category: {eq: $id}}) {
      nodes {
          url
          title
          time
          slug
          price
          id
          info {
            text
            title
          }
        }
      }
  }
`