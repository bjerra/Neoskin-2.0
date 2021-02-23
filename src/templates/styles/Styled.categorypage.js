import styled from "@emotion/styled"

export const Wrapper =  styled.div`


`
export const Header = styled.section`
    
background-image: url(${({ image }) => image});
background-position: center;
background-repeat: no-repeat;
background-size: cover;

text-align: center;

`

export const Body = styled.section`
    

margin: 0 auto;
max-width: 900px; 
padding: 3rem;

@media screen and (max-width: 980px) {
    padding: 1rem 0;
  }

`