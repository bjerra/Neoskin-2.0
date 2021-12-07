import styled from "@emotion/styled"

export const Wrapper =  styled.div`


`


export const Body = styled.section`

    padding-top: 1rem;
    
    background-color: ${({ theme }) => theme.COLOR.HOVER};
    text-align: center;
    position: relative;



    .signature{
        color: ${({ theme }) => theme.COLOR.HIGHLIGHT};
        font-style: italic;
        font-weight: 600;
        float:right;
        font-size: 1.4rem;
        margin-right: 3rem;
       }

       .inner{
        margin: auto;
        max-width: 800px;
        display: flex;
        justify-content: center;
        flex-direction: column;
       }

`