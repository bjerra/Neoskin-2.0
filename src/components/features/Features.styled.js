import styled from "@emotion/styled"
import { Link } from 'gatsby'

export const StyledFeatures = styled.div`


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
    
   
    background: #fff;
    position: relative;
    margin: .5rem 1rem 2rem 1rem;
    height: 100%;
    width: 30%;
    text-decoration: none;
    text-align: left;

    h3{
      position: absolute;
      bottom: 15px;
      left: 25px;
      right: 30%;
      color: white;
      z-index: 10;
    }
    
    @media screen and (max-width: 980px) {
      width: 100%;
    
    }

    button {
        background-color: #00000000;
        border: 1px solid white;
        border-radius: 25px;
        position: absolute;
        bottom: 5px;
        right: 5px;
        height: 50px;
        width: 50px;
        color: white;
        z-index: 10;
    }


`

export const Image = styled.div`
      display: flex;
      height: 100%;
      width 100%;
      border: 2px solid black;
      box-shadow: 0 18px 24px -10px rgba(0,0,0,1);
      :after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image:  linear-gradient(
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 1)
        );
        opacity: 1;
    }
`
