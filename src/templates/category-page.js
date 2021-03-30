import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import {Layout, Banner, BokaButton} from '../components'
import { Wrapper, ServiceCard, SubCategory} from './styles/Styled.categorypage'
import { useTheme  } from '@emotion/react'

const serviceCard = (service, theme) => (
  <ServiceCard key={service.id} theme={theme}>
                {service.info ? (
                   <Link  
                   to={`/behandlingar/${service.slug}`} 
                   state={{modal: true, noScroll: true}}>
                 <h5>{service.title}</h5>
                 <span>mer info</span> 
               </Link>
                ) : (
                  <div className="test">
                <h4>{service.title}</h4>  
              </div>
                )}
              <div className="boka">
                  <BokaButton slug={service.slug}/>    
              </div>
             
        </ServiceCard> 
)

const CategoryPageTemplate = ({
  image,
  title,
  description,
  services,
  subCategories
}) => {

  const serviceData = [...services]
  subCategories.forEach(subCategory => {
    subCategory.serviceData = []
    subCategory.services.forEach(s => {
      const i = services.findIndex(p=>p.id == s)
      if(i !== -1){
        subCategory.serviceData.push(services[i])
        serviceData.splice(i, 1)
      } 
    })
  })

  const theme = useTheme()
  return(
    <Wrapper>
      <SubCategory>    
        <Banner image = {image} alt="Neoskin">
              <h1>{title}</h1>
              </Banner>
              <div className="content">               
                      <p>
                        {description}
                      </p>
                      <ul>
                      {
                        serviceData.map((service) => (                            
                          serviceCard(service, theme)        
                        ))
                        }  
                      </ul>
                     
               </div>  
     
           </SubCategory>   
        {
          subCategories.map((subCategory) => (   
            <SubCategory>     
                <Banner image = {subCategory.image} alt="Neoskin">
                  <h1>{subCategory.title}</h1>
                </Banner>
           
              <div className="content">                
                      <p>
                        {subCategory.description}
                      </p>
                      <ul>

                      {
                        subCategory.serviceData.map((service) => (                            
                          serviceCard(service, theme)            
                        ))
                        }
                      </ul>
                     
               </div>  
            </SubCategory>                         
                            
          ))
          }   
      
  </Wrapper>
  )
}

CategoryPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subCategories: PropTypes.array
}

const CategoryPage = ({ data }) => {

  const category = data.categoriesJson
  const services = data.allServicesJson.nodes;
  const {title, image, description, subCategories} = category;

  return (
    <Layout pageTitle={title} pageDescription={description}>
      <CategoryPageTemplate
        image={image}
        title={title}     
        description={description}     
        services={services}
        subCategories={subCategories}
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
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
          )
        }
      }
      subCategories {
          title
          description
          image {
            childImageSharp {
              gatsbyImageData(    
                layout: FULL_WIDTH
                placeholder: BLURRED
              )
            }
          }
          services 
        }
    }
    allServicesJson(filter: {category: {eq: $id}}) {
      nodes {
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