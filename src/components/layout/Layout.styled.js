import styled from "@emotion/styled"

export const Wrapper = styled.div`
margin: 0;
    h1{
        text-align: center;   
        color: ${({ theme }) => theme.COLOR.LIGHT}; 
        font-weight: 600;
    }
    h2{
        text-align: center;   
        color: ${({ theme }) => theme.COLOR.LIGHT}; 
        font-weight: 300;
    }

    h5{
        text-align: center;   
        color: ${({ theme }) => theme.COLOR.DIM_BLUE};
        font-weight: 200; 
    }
`

export const Body = styled.div`
.inner {
    margin:    0 auto;
    max-width: 1000px;
  
}
`