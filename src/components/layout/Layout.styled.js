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

    h3{
        text-align: center;   
        color: ${({ theme }) => theme.COLOR.LIGHT}; 
        font-weight: 300;
    }
    h4{
        color: ${({ theme }) => theme.COLOR.LIGHT}; 
        font-weight: 300;
    }

    h5{
        text-align: center;   
        color: ${({ theme }) => theme.COLOR.HIGHLIGHT};
        font-weight: 700; 
    }
`

export const Body = styled.div`
.inner {
    margin:    0 auto;
    max-width: 1000px;
  
}
`