import React, { Fragment, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Layout, Banner, BokaButton } from '../components'
import { HTMLContent } from '../components/Content'
import { Wrapper, ServiceCard, Body, Info, ServiceList, StyledBokaButton, Modal } from './styles/Styled.categorypage'
import { useTheme } from '@emotion/react'
import { useOnClickOutside } from '../utils/hooks';

const serviceCard = (service, theme, onClick, clickable) => (

  <ServiceCard key={service.id} theme={theme} clickable={clickable}>
    <div className={service.info ? "info" : "noInfo"} onClick={service.info ? () => onClick(service.id) : () => { }}>
      <h3>{service.title}</h3>
      <div className="pricing">
        <p>{service.time / 60} minuter</p>
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

  const [expanded, setExpanded] = useState(-1);
  const [modal, setModal] = useState(null);
  const theme = useTheme()
  const node = useRef();
  useOnClickOutside(node, () => setModal(null));
  const modalService = services.find(p => p.id === modal) || { title: "", info: [] };

  return (
    <Wrapper>
      <Modal ref={node} theme={theme} open={modal !== null}>
        <div>  
        <div className="header">  
          <h2>{modalService.title}</h2>
         
        </div>
        
          <div className="body">
         
            {
              modalService.info.map((item) => (
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
         
            <BokaButton slug={modalService.slug} large size={"22px"} />
          </div>

        </div>

      </Modal>
      <Banner image={image} alt="Neoskin" position={"50% 50%"} height={"20rem"}>
         
      </Banner>
      <Body>
        <div className="content">
            <h1>{title}</h1>
          <div className="description">
          <p>
            {description}
          </p>
          </div>
        
          {info &&
            <Info theme={theme} expanded={expanded !== -1}>
              <div className="tab">
              {
                info.map((item, i) => (
                  <div className={`header ${expanded === i ? 'current' : ''}`} onClick={() => setExpanded(i === expanded ? -1 : i)}>
                    <h3>{item.title}</h3>
                  </div>
                ))
              }  
              </div>
             
              <div className="body"> 
             
              <HTMLContent content={expanded !== -1 ? info[expanded].body : ""} className={"content"}/>
             
              </div>  
              
            </Info>
          }
          <h2>Behandlingar</h2>
        
          <ServiceList theme={theme}>
            {
              services.map((service) => (
                serviceCard(service, theme, setModal, modal == null)
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

  const { title, image, description, services, info } = data.categoriesJson;

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