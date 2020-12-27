import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Img from "gatsby-image"
import {StyledFeatures, FeatureCard} from './Features.styled'
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {ServiceCard} from '../../components'
import { useStaticQuery, graphql } from "gatsby"
import { useServiceData } from '../ServiceData'

import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);


const FeatureGrid = ({ gridItems }) => {
  
  const serviceData = useServiceData();
  let data = []
  gridItems.forEach(item => {
    const service = serviceData.find(p=>p.id == item.serviceId);
    data.push({image : item.image, ...service});
  })

  return(
  <StyledFeatures>
    
  <Swiper
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
       {data.map(service => (
          <SwiperSlide key={service.serviceId}>
            <FeatureCard>
                <Img fluid={service.image.childImageSharp.fluid} alt="logo" />
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
