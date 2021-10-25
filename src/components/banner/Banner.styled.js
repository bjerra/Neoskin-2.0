
import styled from "@emotion/styled"


export const StyledBanner = styled.section`

    position: relative;
    color: rgba(255, 255, 255, 0.5);
    border-top: 0;
    height: 20rem !important;
    min-height: 20rem;
    overflow: hidden;
    position: relative;
    text-align: center;
    width: 100%; 
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.COLOR.DARK}; 

    h1, h2, h3, h4, h5, h6 {
        color: #ffffff; 
    }

   
    h1 {
        font-size: 2rem;
        margin-bottom: 1rem; 
    }

    > .gatsby-image-wrapper {
        position: absolute;
        left: 0;
        right: 0;
        top:0;
        bottom: 0;
    }

    @media screen and (min-width: 980px) {
        height: 25rem !important;
        min-height: 25rem;
        h1 {
            font-size: 3rem;

        }
      }
     

`
