import styled from "@emotion/styled"

export const Wrapper =  styled.div`

padding-bottom: 3rem;
`


export const Body = styled.section`
    

   

    padding: 0 1rem;

    .signature{
        color: ${({ theme }) => theme.COLOR.HIGHLIGHT};
        font-style: italic;
        font-weight: 600;
        float:right;
        font-size: 1.4rem;
        margin-right: 3rem;
       }

`