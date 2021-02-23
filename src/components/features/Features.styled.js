import styled from "@emotion/styled"
import Img from "gatsby-image"

export const StyledFeatures = styled.div`

  height: 100%;
  width: 50%;
  margin: 0 auto;
  padding: 1rem;
  
  .swiper-button-next{
    color: #00000066;
    right: 0;
  }

  .swiper-button-prev{
    color: #00000066;
    left; 0;
  }

  @media screen and (max-width: 980px) {
    width: 100%;
  }

`
export const FeatureCard = styled.div`

    margin: auto;
    margin-bottom: 40px;
    height: 100%;
    width 800px;
    background-color: #eee;
    box-shadow: 8px 11px 14px 5px rgba(0,0,0,0.29);
    @media screen and (max-width: 980px) {
      width: 75%;
    }
  
`

export const Image = styled(Img)`
      height: 100%;
      width 100%;
`

export const VideoContainer = styled.div`
    height: 500px;
    width 100%;
    @media screen and (max-width: 980px) {
      height: 100%;
    }
`