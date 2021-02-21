import styled from "@emotion/styled"


export const StyledFooter = styled.footer`

    height: 400px;
    padding: 20px 0 60px 0;
    border-top: 2px solid #e0e0e0;
    background-color: ##e0e0e0;
    background-image: url("data:image/svg+xml,%3Csvg width='42' height='44' viewBox='0 0 42 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Page-1' fill='none' fill-rule='evenodd'%3E%3Cg id='brick-wall' fill='%23c1c1c1' fill-opacity='0.4'%3E%3Cpath d='M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");    
    display: flex;
    justify-content: flex-start;
    position: relative;
    color: black;
    font-size: 2rem;
    @media screen and (max-width: 736px) {
        font-size: 1.5rem;
        flex-direction: column;
     }

    ul {
       
        text-align: left;
        margin-top: 2rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;    
    }
a{
    text-decoration: none;
}
   
`