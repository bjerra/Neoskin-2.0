import React, {useState} from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage'
import {StyledFeatures} from './Features.styled'

import { useServiceData } from '../ServiceData'
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);


 
  const FeatureGrid = ({ gridItems }) => {

    const offers = useServiceData().reduce((acc, current) => {
      if(current.offer)
        acc.push(current)
  return acc;
  },[])

  return(
  <StyledFeatures>
    
  <Swiper
      spaceBetween={50}
      slidesPerView={3}
      loop={true}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      autoplay={
        {
          delay: 2500,
          disableOnInteraction: false
        }   
      }
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
     {offers.map(service => (
       <SwiperSlide>
          
            <section key={service.id}>
          
                
                  <PreviewCompatibleImage imageInfo={{}} />
                  <p>{service.title}</p>
                  
            </section>
            
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
