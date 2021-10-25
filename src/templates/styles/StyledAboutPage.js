import styled from "@emotion/styled"

export const Wrapper =  styled.div`

padding-bottom: 3rem;
`


export const Body = styled.section`
    

   

    padding: 0 1rem;

    .inner {
        margin: 0rem auto;
        width: 75rem;
        max-width: calc(100% - 3rem); 
        @media screen and (max-width: 480px) {
          .inner {
            max-width: calc(100% - 1rem); 
            } 
        }

        
    }
    .signature{
        color: ${({ theme }) => theme.COLOR.HIGHLIGHT};
        font-style: italic;
        font-weight: 600;
        float:right;
        font-size: 1.4rem;
        margin-right: 3rem;
       }

`