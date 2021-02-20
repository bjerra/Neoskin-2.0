import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Img from "gatsby-image"
import {StyledFeatures, FeatureCard} from './Features.styled'
import SwiperCore, { Navigation, Pagination, A11y, Autoplay, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {ServiceCard} from '../../components'
import { useStaticQuery, graphql } from "gatsby"

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
      effect={"coverflow"}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
       {services.map(service => (
          <SwiperSlide key={service.serviceId}>
            <FeatureCard>
               
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
