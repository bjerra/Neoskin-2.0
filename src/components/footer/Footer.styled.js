import styled from "@emotion/styled"


export const StyledFooter = styled.footer`

    padding: 20px 0 100px 0;
    border-top: 2px solid #e0e0e0;
    background-color: #404040;
    display: flex;
    justify-content: flex-start;
    position: relative;
    color: #ddd;
    font-size: 1.15rem;
    @media screen and (max-width: 736px) {
        font-size: 1.1rem;
     }

    ul {
       
        text-align: left;
        margin-top: 2rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start; 
    }

a{
    text-decoration: none;
   
}
   
`