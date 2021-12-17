
import styled from "@emotion/styled"


export const StyledBanner = styled.div`

    position: relative;
    color: rgba(255, 255, 255, 0.5);
    border-top: 0;
    height: ${({ height }) => height} !important;
    min-height: ${({ height }) => height};
    overflow: hidden;
    position: relative;
    text-align: center;
    width: 100%; 
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.COLOR.DIM_BLUE}; 

   

    h1, h2, h3, h4, h5, h6 {
        color: #ffffff; 
    }


   
   
    h1 {
        font-size: 2rem;
        margin-bottom: 1rem; 
    }

    > .gatsby-image-wrapper {
        position: fixed;
        left: 0;
        right: 0;
        top:0;
        bottom: 0;
        ::before {
            content:""; /* required for ::before */
            position:absolute; /* don't scroll with page */
            z-index:-1; /* place behind elements on page */
            left:0;
            right: 0;
            top:0;
            bottom: 0;
            background-color:#14C2CC;
            background-image: 
            radial-gradient(circle farthest-side at bottom right, #fffdf611, #e4d8be), radial-gradient(ellipse farthest-corner at 0% 100%, #e4d8be, #fe9a66);
            animation:bg-change 10s infinite;
        }
        
        @keyframes bg-change {
        0%, 100% {
            filter:hue-rotate(0deg);
        }
        50% {
            filter:hue-rotate(-15deg);
        }
        }
    }

    @media screen and (min-width: 980px) {
        height: ${({ height }) => height} !important;
        min-height: ${({ height }) => height};
        h1 {
            font-size: 3rem;

        }
      }
     

`
