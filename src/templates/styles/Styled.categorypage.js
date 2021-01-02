import styled from "@emotion/styled"

export const Wrapper =  styled.div`
    
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
export const Header = styled.section`
    
background-image: url(${({ image }) => image});
background-position: center;
background-repeat: no-repeat;
background-size: cover;

text-align: center;

`

export const Body = styled.section`
    
    

`