
import styled from "@emotion/styled"


export const StyledBanner = styled.div`

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    color: rgba(255, 255, 255, 0.5);
    border-top: 0;
    height: 20rem !important;
    min-height: 20rem;
    overflow: hidden;
    text-align: center;
    width: 100%; 
  
    background-color: ${({ theme }) => theme.COLOR.DIM_BLUE}; 

   

    h1, h2, h3, h4, h5, h6 {
        color: #ffffff; 
    }


   
   
    h1 {
        font-size: 2rem;
        margin-bottom: 1rem; 
    }

    > .gatsby-image-wrapper {
          height: 100%;
          width: 100%;
    }

    @media screen and (min-width: 980px) {
        height: 35rem;
        min-height: 35rem;
        h1 {
            font-size: 3rem;

        }
      }
     

`
