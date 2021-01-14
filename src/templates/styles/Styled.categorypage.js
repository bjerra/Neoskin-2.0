import styled from "@emotion/styled"

export const Wrapper =  styled.div`
background-color: #DFDBE5;
background-image: url("data:image/svg+xml,%3Csvg width='42' height='44' viewBox='0 0 42 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Page-1' fill='none' fill-rule='evenodd'%3E%3Cg id='brick-wall' fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    .inner {
        margin: 0 auto;
        width: 75rem;
        max-width: calc(100% - 2rem); 
        @media screen and (max-width: 480px) {
          .inner {
            max-width: calc(100% - 1rem); 
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