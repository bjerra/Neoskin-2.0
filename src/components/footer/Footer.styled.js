import styled from "@emotion/styled"


export const StyledFooter = styled.footer`

    padding: 50px 0 120px 0;
    background-color: ${({ theme }) => theme.COLOR.FOOTER}; 
    color: ${({ theme }) => theme.COLOR.MENU_TEXT}; 
    display: flex;
    justify-content: flex-start;
    position: relative;
    color: #ddd;
    font-size: 1.2rem;
    @media screen and (max-width: 736px) {
        font-size: 1.2rem;
     }

    ul {
       
        text-align: left;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start; 
    }

a{

    align-items: center;
    justify-content: flex-start; 
    display: flex;
    span {
        padding: .5rem;
    }
}
   
`