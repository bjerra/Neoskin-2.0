import styled from "@emotion/styled"

export const Wrapper =  styled.div`


`
export const Body = styled.section`
    

    margin: 0rem auto;
    max-width: 900px; 
    padding: 0 1rem;

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


`