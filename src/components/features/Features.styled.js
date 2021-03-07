import styled from "@emotion/styled"
import Img from "gatsby-image"
import { Link } from 'gatsby'

export const StyledFeatures = styled.div`

  margin: 0 auto;
  background: #eee;
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  

`
export const FeatureCard = styled(Link)`
    
    position: relative;
    margin: .5rem 1rem 2rem 1rem;
    height: 100%;
    width: 30%;
    text-decoration: none;
  
    @media screen and (max-width: 980px) {
      width: 100%;
      h3{
        font-size: 1.25rem;
      }
    }

    button {
        background-color: white;
        position: absolute;
        bottom: 5px;
        right: 5px;
        height: 50px;
        width: 50px;
        border-radius: 25px;
    }


`

export const Image = styled(Img)`
      height: 100%;
      width 100%;
`
