import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Layout, Banner, BokaButton } from '../components'
import { Wrapper, ServiceCard, Body, ServiceList, Modal } from './styles/Styled.categorypage'
import { useTheme } from '@emotion/react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useOnClickOutside } from '../utils/hooks';


const CategoryPageTemplate = ({
  image,
  title,
  description,
  services,
  brandLogo,
}) => {

  //const brandImg = getImage(brandLogo)
  const [modal, setModal] = useState(null);
  const theme = useTheme()
  const modalService = services.find(p => p.id === modal) || { title: "", info: [] };
  const node = useRef(); 
  useOnClickOutside(node, () => setModal(null));

  return (
    <Wrapper>
     
      <Modal theme={theme} open={modal !== null}>
     
      <div className='content' ref={node}>
      <div className="close" onClick={() => setModal(null)}/>
       
        <div className="header">  
          <h2>{modalService.title}</h2>
         
        </div>
        
          <div className="body">
         
             <p>{ modalService.info}</p>
             
          </div>
          
          <div className="footer">
            <div className="timeprice">
            <p>{modalService.time}</p>
            <p>{modalService.price}</p>
            </div>
            <BokaButton slug={modalService.slug} large size={"20px"} />
          </div>

        </div>
      </Modal>
      <Banner image={image} alt="Neoskin" position={"50% 50%"} height={"35rem"}>
         
      </Banner>
      <Body>
        <div className="content">
            <h1>{title}</h1>
          <div className="description">
          <p>
            {description}
          </p>
          </div>
  
          <ServiceList theme={theme}>
            {
              services.map((service) => (
                <ServiceCard key={service.id} theme={theme} onClick={() => setModal(service.id)} >
                   <GatsbyImage image={getImage(service.brand || brandLogo)} alt={""}/>  
                  <h4>{service.title}</h4>
                </ServiceCard>
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
  brandLogo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  info: PropTypes.array
}

const CategoryPage = ({ data }) => {

  const { title, image, description, brandLogo, services } = data.markdownRemark.frontmatter;
  return (
    <Layout pageTitle={title} pageDescription={description}>
      <CategoryPageTemplate
        image={image}
        title={title}
        description={description}
        services={services}
        brandLogo={brandLogo}
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
    markdownRemark(id: { eq: $id }) {
      frontmatter {
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
        brandLogo {
          childImageSharp {
            gatsbyImageData(
              width: 200
              placeholder: TRACED_SVG
            )
          }
        } 
        services {
          title
          time
          slug
          price
          id
          info     
        }
      }
    }
  }
`