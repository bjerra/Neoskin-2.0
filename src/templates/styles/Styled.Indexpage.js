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

    padding: 4rem 0 6rem 0 ;
    background-image: url(${({ image }) => image});
    background-attachment: fixed;
    box-shadow: inset 0px 50px 40px -30px rgba(0,0,0,0.6), inset 0px -50px 40px -30px rgba(0,0,0,0.6);
    background-repeat: no-repeat;
    background-size: cover;
   
    position: relative;
    text-align: center;
    z-index: 1; }
    input, #cta select, #cta textarea {
      color: #ffffff; }
   
      @media screen and (max-width: 480px) {
        background-attachment: scroll;
      }

    .inner { 
      position: relative;
      margin: 5% 25%;
      z-index: 3; }

`

export const Services = styled.section`

    padding: 4rem 1rem 6rem 1rem ;

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

    padding: 4rem 0 6rem 0 ;


    .inner {
        display: flex;
        flex-direction: column;
        justify-content: center;
        @media screen and (max-width: 480px) {
          .inner {
            max-width: calc(100% - 3rem); 
            } 
        }

       
    }

    .column{        
        display: flex;
        flex-direction: row;

         * {
            flex: 1;
        }

        @media screen and (max-width: 980px) {
            flex-direction: column;
          }
        
    }
`