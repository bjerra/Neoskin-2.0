import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import {Layout,Navbar, Banner, ServiceCard} from '../components'
import { Wrapper, Header, Body} from './styles/Styled.categorypage'
import { useServiceData } from '../components/ServiceData'
import { useCategoryData } from '../components/CategoryData'

export const CategoryPageTemplate = ({
  id,
  image,
  title,
  description,
  services
}) => {
      
  return(
    <Wrapper>
      <Navbar />
      <Banner image={!!image.childImageSharp ? image.childImageSharp.fluid.src : image}>
        <h1>{title}</h1>
        <p>{description}</p>
      </Banner>  
      <Body>
        {
          services.map((service) => (                       
              <div key={service.id}>  
              <ServiceCard service={service}/>                         
              </div>       
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

const CategoryPage = ({ pageContext }) => {

  const category = useCategoryData().find(p=>p.title == pageContext.id)
  console.log(category)
  const services = useServiceData().filter(p => p.category ==  pageContext.id)
  const {title, image, description} = category;

  return (
    <Layout pageTitle={title} pageDescription={description}>
      <CategoryPageTemplate
        image={image}
        title={title}     
        description={description}     
        services={services}
        id={pageContext.id}
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

