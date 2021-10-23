import styled from "@emotion/styled"

export const StyledMobile = styled.nav`
    box-shadow: 0 -5px 5px 1px rgba(0,0,0,0.15);
    overflow: hidden;
    background: ${({ theme }) => theme.COLOR.MENU_BACKGROUND};
    color: ${({ theme }) => theme.COLOR.MENU_TEXT};
    z-index: 100;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 55px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    font-size: 14px;

    a{
       
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
   


`;