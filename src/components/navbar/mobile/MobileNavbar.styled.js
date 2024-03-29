import styled from "@emotion/styled"

export const StyledMobile = styled.nav`
   
    overflow: hidden;
    background: ${({ theme }) => theme.COLOR.LIGHT};
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
    font-size: 15px;


    a{
       
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

    }



`;