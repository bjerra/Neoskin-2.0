import styled from "@emotion/styled"

export const Wrapper =  styled.div`

section {
    position: relative;
}

.logo{
    position: absolute;
    top: 6rem;
    left: 0;
    right: 0;
    display: flex;

    .gatsby-image-wrapper {
        margin: auto;
        width: 15rem; 

       
   }

   @media screen and (min-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {

    top: 10rem;
    .gatsby-image-wrapper {
        width: 25rem; 
   }
   
}
    
}
`

export const Intro = styled.section`

    
   
    h5 {
        font-size: 1.2rem;
    }
    
    .inner {
        margin: 0rem auto;
        width: 75rem;
        max-width: calc(100% - 3rem); 
     
        @media screen and (min-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
                max-width: 900px; 
                .body {
                    margin: auto;
                    max-width: 500px; 
       
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
