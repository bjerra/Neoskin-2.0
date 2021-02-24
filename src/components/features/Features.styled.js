import styled from "@emotion/styled"
import Img from "gatsby-image"
import { Link } from 'gatsby'

export const StyledFeatures = styled.div`


  margin: 0 auto;
  
  .swiper-button-next{
    color: #ffffff66;
    right: 0;
  }

  .swiper-button-prev{
    color: #ffffff66;
    left; 0;
  }

  .swiper-container {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  

`
export const FeatureCard = styled(Link)`
    border: 2px solid black;
    margin: 1rem;
    margin-bottom: 40px;
    height: 100%;
    width: 50%;
    background-color: #eee;
    box-shadow: 8px 11px 14px 5px rgba(0,0,0,0.29);
    @media screen and (max-width: 980px) {
      width: 100%;
    }

    h3{
      position: absolute;
      top: 1.5rem;
      left: 0;
      right:0;
      z-index: 1;
    }


`

export const Image = styled(Img)`
      height: 100%;
      width 100%;
`
