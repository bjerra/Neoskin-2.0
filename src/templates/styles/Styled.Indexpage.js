import styled from "@emotion/styled"

export const Wrapper =  styled.div`
    

section {
    position: relative;
}

`

export const Intro = styled.section`

    padding: 1rem 1rem; 6rem 1rem;
   
    h5 {
        font-style: italic;
    }
    
    .inner {
        margin: 0rem auto;
        width: 75rem;
        max-width: calc(100% - 3rem); 
        @media screen and (max-width: 480px) {
          .inner {
            max-width: calc(100% - 3rem); 
            } 
        }
    }
   

    header{
        
        text-align: center;
        margin-bottom: 2rem; 
    }
        p {
        margin-left: auto;
        margin-right: auto;
    }

    .button{
        margin-top: 4rem;
        display: flex;
        justify-content: center;
    }

`

export const Highlights = styled.section`
    padding: 1rem 0;
    background-color: ${({ color }) => color}; 
   
`

export const CTA = styled.section`

        padding: 1rem 0;
    
   
    text-align: center;
    .gatsby-image-wrapper {
        position: absolute;
        top:0;
        bottom:0;
        left: 0;
        right:0;
        overflow: hidden;

        :after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image:  linear-gradient(
              rgba(255, 255, 255, 1),
              rgba(255, 255, 255, 0)
            );
            opacity: 1;
        }
        
    }
    .inner { 
      position: relative;
      margin: 5% auto;
      z-index: 3; 
      
    }

`
