import React from 'react'
import PropTypes from 'prop-types'
import {StyledFeatures, FeatureCard, Image} from './Features.styled'
import SwiperCore, { Navigation, Pagination, A11y, Autoplay, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation, Pagination, A11y, Autoplay, EffectCoverflow]);


const FeatureGrid = ({ services }) => {

  return(
  <StyledFeatures>
    
  <Swiper
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay= {{
        delay: 3500,
        disableOnInteraction: true,
      }}
      pagination={{ clickable: true }}
     
     
    >
       {services.map(service => (
          <SwiperSlide key={service.serviceId} >
            <FeatureCard to={`/behandlingar/${service.slug}`} state={{modal: true}}>
                <h3>{service.title}</h3>
                
              <Image>
                <GatsbyImage image={getImage(service.image)} alt={service.category} />
              </Image>
              <button>Läs Mer</button>
            </FeatureCard>
          </SwiperSlide>
        ))}
 
    </Swiper>
    
  </StyledFeatures>
)}

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
