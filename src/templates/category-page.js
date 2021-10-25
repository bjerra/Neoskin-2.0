import React, { Fragment, useState, useRef } from 'react'
import PropTypes, { exact } from 'prop-types'
import { graphql } from 'gatsby'
import {Layout, Banner, Divider, BokaButton} from '../components'
import { HTMLContent } from '../components/Content'
import { Wrapper, ServiceCard, Body, Info, ServiceList, StyledBokaButton, Modal} from './styles/Styled.categorypage'
import { useTheme  } from '@emotion/react'
import { useOnClickOutside } from '../utils/hooks';

const serviceCard = (service, theme, onClick, clickable) => (
  
  <ServiceCard key={service.id} theme={theme} clickable={clickable}>    
              <div className={service.info ? "info" : "noInfo"} onClick={ service.info ? () => onClick(service.id) : () => {}}>  
                 <h3>{service.title}</h3>
                 <div className="pricing">              
                   <p>{service.time/60} minuter</p>
                   <p>{service.price} kr</p>
                  <span> {service.info ? "Mer info" : " "}</span>
                 </div>
               </div> 
              <div className="boka">
                  <StyledBokaButton href={`https://www.bokadirekt.se/boka-tjanst/neoskin-33692/${service.slug}`}>Boka</StyledBokaButton>    
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

  const [expanded, setExpanded] = useState(null);
  const theme = useTheme()
  const node = useRef(); 
  useOnClickOutside(node, () => setExpanded(null));
  const ecpandedService = services.find(p=>p.id === expanded) || {title: "", info: []};
  return(
    <Wrapper>
      <Modal ref={node} theme={theme} open={expanded !== null}>
        <div>
        <h2>{ecpandedService.title}</h2>
       
        <Divider fillColor={theme.COLOR.INFO} color={theme.COLOR.HOVER} height={3} size={6} invert/>
        <div className="body">
       
        { 
            ecpandedService.info.map((item) => (    
              <Fragment>   
                  <h4>{item.title}</h4>
                  {
                    <p>{item.text}</p>
                  }
              </Fragment>                             
            ))
          }  
           </div>
          <div className="footer">
           <BokaButton slug={ecpandedService.slug} large size={"22px"}/>
          </div>
        
        </div>
       
        </Modal>
        <Banner image = {image} alt="Neoskin" position={"50% 20%"}>
        </Banner>
          <Body>    
            
       
              <div className="content">  
              <h1>{title}</h1>             
                      <p>
                        {description}
                      </p>
                      <Info>
                      {
                        false &&
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
                      <h2>Behandlingar</h2>   
                      <Divider fillColor={theme.COLOR.DIM_BLUE} color={theme.COLOR.BACKGROUND} height={5} size={5} invert/>
                      <Divider fillColor={theme.COLOR.BACKGROUND} color={theme.COLOR.DIM_BLUE} height={6} size={5} invert/>
                      <ServiceList>
                      {
                        services.map((service) => (                            
                          serviceCard(service, theme, setExpanded, expanded == null)        
                        ))
                      }  
                      </ServiceList>
                     
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
        info {
          title
          text
        }
      }
     
    }
  }
`