import styled from "@emotion/styled"


export const StyledFooter = styled.footer`
    z-index: 10;
    padding: 20px 0 20px 0;
    background-color: ${({ theme }) => theme.COLOR.FOOTER}; 
    color: ${({ theme }) => theme.COLOR.MENU_TEXT}; 
    display: flex;
    justify-content: flex-start;
    position: relative;
    font-size: 1rem;
    font-weight: 300;
    @media screen and (max-width: 736px) {
        font-size: 1rem;
        padding: 15px 0 75px 0;
     }

    ul {
       
        text-align: left;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start; 
    }

a{
    text-decoration: none;
    align-items: center;
    justify-content: flex-start; 
    display: flex;
    span {
        padding: .5rem;
    }
}
   
`