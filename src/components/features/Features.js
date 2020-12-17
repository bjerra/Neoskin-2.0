import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Img from "gatsby-image"
import {StyledFeatures} from './Features.styled'
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {ServiceCard} from '../../components'
import { useStaticQuery, graphql } from "gatsby"
import { useServiceData } from '../ServiceData'

import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);


const FeatureGrid = ({ gridItems }) => {
  
  const serviceData = useServiceData();

  return(
  <StyledFeatures>
    
  <Swiper
      spaceBetween={50}
      slidesPerView={3}
      loop={false}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      breakpoints= {{
        '@0.00': {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        '@0.75': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '@1.00': {
          slidesPerView: 3,
          spaceBetween: 40,
        }
      }}
    >
       {gridItems.map(service => (
          <SwiperSlide key={service.serviceId}>
            <div style={{width: '100px', margin: 'auto'}}>
              <Img fluid={service.image.childImageSharp.fluid} alt="logo" />
            </div>
            <ServiceCard service={service}/>
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
