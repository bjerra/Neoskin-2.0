import styled from "@emotion/styled"

export const StyledMobile = styled.nav`
    
    background: ${({ theme }) => theme.COLOR.LIGHT.hex};
    color: ${({ theme }) => theme.COLOR.DARK.hex};
    z-index: 10;
    position: fixed;
    transition: transform 0.2s ease-out;
    bottom:0;
    right: 0;
    left: 0;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    font-size: 12px;

    a{
        color: ${({ theme }) => theme.COLOR.DARK.hex};
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
   


`;