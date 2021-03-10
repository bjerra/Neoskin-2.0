import styled from "@emotion/styled"
import { Link } from 'gatsby'

export const StyledFeatures = styled.div`

box-shadow: 0px 5px 10px -10px rgba(0,0,0,0.75) inset, 0px -5px 10px -10px rgba(0,0,0,0.75) inset;
  margin: 0 auto;
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

export const Image = styled.div`
      height: 100%;
      width 100%;
`
