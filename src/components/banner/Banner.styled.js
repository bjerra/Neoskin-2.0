
import styled from "@emotion/styled"


export const StyledBanner = styled.section`
  
    background-color: #111111;
    color: rgba(255, 255, 255, 0.5);
    align-items: center;
    display: flex;
    justify-content: center;
    background-image: url(${({ image }) => image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-top: 0;
    height: 35rem !important;
    min-height: 35rem;
    overflow: hidden;
    position: relative;
    text-align: center;
    width: 100%; 
    

    video {  
        transform: translateX(50%) translateY(50%);
        bottom: 50%;
        height: auto;
        min-height: 100%;
        min-width: 100%;
        overflow: hidden;
        position: absolute;
        right: 50%;
        width: auto; 
    }

    h1, h2, h3, h4, h5, h6 {
        color: #ffffff; 
    }

    .inner { 
        transform: scale(1.0);
        transition: opacity 1s ease, transform 1s ease;
        opacity: 1;
        position: relative;
        z-index: 3; 
        display: flex;
        justify-content: center;
    }
    .inner > :last-child {
          margin-bottom: 0; 
        }
    h1 {
        font-size: 4rem;
        margin-bottom: 1rem; 
    }
    
    #banner.small {
      height: 30vh !important;
      min-height: 30vh; }
    @media screen and (max-width: 1280px) {
       video {
         
      } }
    @media screen and (max-width: 736px) {
      
        height: auto !important;
        min-height: 0;
        padding: 4rem 2rem 4rem 2rem; }
        .inner {
          width: 100%; }
         h1 {
          font-size: 1.75rem;
          margin-bottom: 0.5rem;
          padding-bottom: 0; }
        } 
    @media screen and (max-width: 480px) {
      p {
        font-size: 1rem; } 
      }
    .is-preload .inner {
      transform: scale(0.99);
      opacity: 0; }
    is-preload :before {
      opacity: 1; 
`