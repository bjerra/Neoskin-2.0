import React,{useState} from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {Layout, Banner, BokaButton} from '../components'
import { Wrapper, ServiceCard, Body, SubCategory} from './styles/Styled.categorypage'
import { useTheme  } from '@emotion/react'

const serviceCard = (service, theme) => (
  <ServiceCard key={service.id} theme={theme}>
                {service.info ? (
                   <Link  
                   to={`/behandlingar/${service.slug}`} 
                   state={{modal: true, noScroll: true}}>
                 <h4>{service.title}</h4>
                 <div>
                   <p>
                     {service.time} , {service.price} 
                   </p> 
                   
                 </div>
                 <span>mer info</span> 
               </Link>
                ) : (
                  <div className="test">
                <h4>{service.title}</h4>
                <div>
                  <p>
                    {service.time} , {service.price} 
                  </p> 
                  
                </div>
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
  const [expanded, setExpanded] = useState("");
  return(
    <Wrapper>
      <Banner image={image} alt={title}>
        <h1>{title}</h1>
      </Banner>  
      <Body>
        <p>{description}</p>
        {
          subCategories.map((subCategory) => (   
            <SubCategory expanded={expanded === subCategory.title}>     
              <button onClick={() => setExpanded(expanded === subCategory.title ? "" : subCategory.title)}>
              <h3>{subCategory.title}</h3>
              </button>
              
              <div className="content">               
                        <GatsbyImage image={getImage(subCategory.image)} alt={subCategory.title} />
                        <p>
                          {subCategory.description}
                        </p>
                        {
                        subCategory.serviceData.map((service) => (                            
                          serviceCard(service, theme)            
                        ))
                        }
               </div>  
            </SubCategory>                         
                            
          ))
          }   

        {
          serviceData.map((service) => (                            
            serviceCard(service, theme)        
          ))
          }   
      </Body>
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
                width: 400
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