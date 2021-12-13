import styled from "@emotion/styled"

export const Wrapper =  styled.div`


`
export const Body = styled.section`
    

    padding-top: 1rem;
    
    background-color: ${({ theme }) => theme.COLOR.BACKGROUND};
    text-align: center;
    position: relative;

    .inner {
            margin: auto;
            max-width: 800px;
            display: flex;
            justify-content: center;
            flex-direction: column;
    }


`