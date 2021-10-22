import styled from "@emotion/styled"

export const Wrapper =  styled.div`
    
background-color: ${({ theme }) => theme.COLOR.DARK.hex}; 
color: ${({ theme }) => theme.COLOR.LIGHT.hex}; 
h1{
    text-align: center;   
}

section {
    position: relative;
}

`

export const Intro = styled.section`

    background-color: ${({ theme }) => theme.COLOR.LIGHT.hex}; 
    color: ${({ theme }) => theme.COLOR.DARK.hex}; 
    padding: 4rem 0 6rem 0 ;
   
    z-index: 1; 
    @media screen and (max-width: 1280px) {
        padding: 4rem 0 2rem 0 ; 
    }
    @media screen and (max-width: 736px) {

        padding: 3rem 0 1rem 0 ; 
     }
    @media screen and (max-width: 480px) {

        padding: 2rem 0 0.1rem 0 ; 
    }
    
    .inner {
        margin: 0 auto;
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
        margin-bottom: 4rem; 
    }
        p {
        max-width: 75%;
        margin-left: auto;
        margin-right: auto;
    }

`

export const Highlights = styled.section`
    padding: 2rem 0;
    background-color: ${({ color }) => color}; 
   
`

export const CTA = styled.section`
padding: 5rem 0;
color: ${({ theme }) => theme.COLOR.DARK.hex}; 
    height: 400px;
   
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

export const Services = styled.section`
    padding-bottom: 2rem;
    color: ${({ theme }) => theme.COLOR.DARK.hex}; 
    background-color: ${({ theme }) => theme.COLOR.LIGHT.hex}; 
    .inner {
        margin: 0 auto;
        width: 100%;
        @media screen and (max-width: 480px) {
          .inner {
            max-width: calc(100% - 3rem); 
            } 
        }
    }
`


export const About = styled.section`

    padding-bottom: 2rem;
    background-color: ${({ color }) => color}; 
    .inner {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        @media screen and (max-width: 980px) {
            flex-direction: column;
        }
    }

    .gatsby-image-wrapper {
        width: 300px;
        height: 300px;
    }

    .column{        
      
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
         * {
            flex: 1;
        }

     
        
    }
`
export const Salon = styled.section`

    color: ${({ theme }) => theme.COLOR.DARK.hex}; 
    background-color: ${({ theme }) => theme.COLOR.LIGHT.hex}; 
   
`