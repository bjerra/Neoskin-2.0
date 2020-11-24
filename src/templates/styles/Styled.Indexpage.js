import styled from "@emotion/styled"

export const Wrapper =  styled.div`
    
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
        max-width: calc(100% - 6rem); 
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
export const CTA = styled.section`

    padding: 4rem 0 6rem 0 ;
    background-color: #ce1b28;
    color: rgba(255, 255, 255, 0.75);
    background-attachment: fixed;
    background-image: linear-gradient(#9198e522, #ffffffff), url(/img/CTA.jpg);
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    text-align: center;
    z-index: 1; }
    input, #cta select, #cta textarea {
      color: #ffffff; }
   
    .inner {
      position: relative;
      z-index: 3; }
    @media screen and (max-width: 980px) {
        background-attachment: scroll; 
`

export const Services = styled.section`

    padding: 4rem 0 6rem 0 ;

    .inner {
        margin: 0 auto;
        width: 75rem;
        max-width: calc(100% - 6rem); 
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
        margin: 0 auto;
        width: 75rem;
        max-width: calc(100% - 6rem); 
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
        
    }
`