import styled from "@emotion/styled"
import Img from "gatsby-image"
import { Link } from 'gatsby'

export const StyledFeatures = styled.div`


  margin: 0 auto;
  
  .swiper-button-next{
    color: #ffffff66;
    right: 0;
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
    position: relative;
    border: 2px solid black;
    margin: 1rem;
    margin-bottom: 40px;
    height: 100%;
    width: 30%;
    background-color: #eee;
    box-shadow: 8px 11px 14px 5px rgba(0,0,0,0.29);
    @media screen and (max-width: 980px) {
      width: 100%;
      h3{
        font-size: 1.25rem;
      }
    }

    h3{
      position: absolute;
      font-size: 1.75rem;
      top: .5rem;
      left: 0;
      right:0;
      z-index: 1;
    }


`

export const Image = styled(Img)`
      height: 100%;
      width 100%;
`
