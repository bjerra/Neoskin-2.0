import styled from "@emotion/styled"

export const StyledMobile = styled.nav`
    box-shadow: 0 -5px 5px 1px rgba(0,0,0,0.15);
    
    background: ${({ theme }) => theme.COLOR.MENU.hex};
    color: ${({ theme }) => theme.COLOR.MENU_INVERT.hex};
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
    font-size: 14px;

    a{
        color: ${({ theme }) => theme.COLOR.MENU_INVERT.hex};
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
   


`;