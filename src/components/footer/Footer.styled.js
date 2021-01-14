import styled from "@emotion/styled"


export const StyledFooter = styled.footer`
    height: 250px;
    padding: 20px 0 60px 0;
    background: rgb(2,0,36);
    background: radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(255,255,255,1) 0%, rgba(228,228,228,1) 0%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
    display: flex;
    justify-content: space-around;
    position: relative;
    

    ul {

        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }

    a {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }

    svg{
        height: 20px;
        width: 20px;
    }
`