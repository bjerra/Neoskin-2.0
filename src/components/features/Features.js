import React from 'react'
import PropTypes from 'prop-types'
import {StyledFeatures, FeatureCard, Image, VideoContainer} from './Features.styled'
import SwiperCore, { Navigation, Pagination, A11y, Autoplay, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {ServiceCard, Video} from '../../components'

import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation, Pagination, A11y, Autoplay, EffectCoverflow]);


const FeatureGrid = ({ services }) => {

  return(
  <StyledFeatures>
    
  <Swiper
      spaceBetween={0}
      slidesPerView={1}
      loop={false}
      navigation
      pagination={{ clickable: true }}
     
    >
       {services.map(service => (
          <SwiperSlide key={service.serviceId}>      
            <FeatureCard>
              <VideoContainer>
              <Image fluid={service.image?.childImageSharp.fluid} alt={service.category}/>
              </VideoContainer>
           
              <ServiceCard service={service}/>
    
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
