import styled from "@emotion/styled"

export const Wrapper = styled.div`
margin: 0;
    h1, h2{
        text-align: center;   
        color: ${({ theme }) => theme.COLOR.LIGHT}; 
        font-weight: 600;
    }

    h5{
        text-align: center;   
        color: ${({ theme }) => theme.COLOR.DIM_BLUE}; 
    }
`

export const Body = styled.div`
.inner {
    margin:    0 auto;
    max-width: 1000px;
  
}
`