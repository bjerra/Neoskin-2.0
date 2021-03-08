import styled from "@emotion/styled"

export const Wrapper =  styled.div`
    
h2{
    text-align: center;   
}


`

export const Intro = styled.section`

    
    padding: 4rem 0 6rem 0 ;
    position: relative;
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

    
   
`

export const CTA = styled.section`

    margin: 5rem 0;
    padding: 4rem 0 6rem 0 ;
    height: 400px;
   
    position: relative;
    text-align: center;
    .gatsby-image-wrapper {
        position: absolute;
        top:0;
        bottom:0;
        left: 0;
        right:0;
        overflow: hidden;
        
    }
    .inner { 
      position: relative;
      margin: 5% auto;
      z-index: 3; }

`

export const Services = styled.section`

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