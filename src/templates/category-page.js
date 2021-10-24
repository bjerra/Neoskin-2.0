import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import {Layout, Banner, BokaButton} from '../components'
import Content, { HTMLContent } from '../components/Content'
import { Wrapper, ServiceCard, Body, Info} from './styles/Styled.categorypage'
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
  info,
  services,
}) => {

  const theme = useTheme()
  return(
    <Wrapper>
        <Banner image = {image} alt="Neoskin">
        </Banner>
      <Body>    
       
              <div className="content">  
              <h1>{title}</h1>             
                      <p>
                        {description}
                      </p>
                      <Info>
                      {
                        info &&
                        info.map((item) => (    
                          <Fragment>
                             <h2>{item.title}</h2>
                             {
                               false && <HTMLContent content={item.body} />
                             }
                          
                          </Fragment>                             
                        ))
                      }  
                      </Info>
                      <ul>
                      {
                        services.map((service) => (                            
                          serviceCard(service, theme)        
                        ))
                      }  
                      </ul>
                     
               </div>  
     
          </Body>   
  </Wrapper>
  )
}

CategoryPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  info: PropTypes.array
}

const CategoryPage = ({ data }) => {

  const {title, image, description, services, info} = data.categoriesJson;

  return (
    <Layout pageTitle={title} pageDescription={description}>
      <CategoryPageTemplate
        image={image}
        title={title}     
        description={description}     
        services={services}
        info={info}
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
      info{
        title
        body
      }
      services{
        title
        time
        slug
        price
        id
        info 
      }
     
    }
  }
`