import styled from "@emotion/styled"

export const Wrapper =  styled.div`
    
h3{
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

    height: 300px;
    background-attachment: fixed;
    background-color: #f6f6f6;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23325389' fill-opacity='0.4' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    box-shadow: inset 0px 50px 40px -30px rgba(0,0,0,0.6), inset 0px -50px 40px -30px rgba(0,0,0,0.6);

    @media screen and (max-width: 480px) {
        background-attachment: scroll;
      }
   
`

export const CTA = styled.section`

    padding: 4rem 0 6rem 0 ;
    box-shadow: 0px 10px 33px 16px rgba(0,0,0,0.29);
    background-color: #ce1b28;
    color: rgba(0, 0, 0, 0.75);
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