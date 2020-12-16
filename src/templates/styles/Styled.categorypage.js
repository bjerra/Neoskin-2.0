import styled from "@emotion/styled"

export const Wrapper =  styled.div`
    
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

`