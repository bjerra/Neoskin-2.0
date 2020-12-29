import styled from "@emotion/styled"

export const StyledMobile = styled.div`
    
    background: ${({ theme }) => theme.COLOR.DARK.hex};
    z-index: 10;
    position: fixed;
    bottom:0;
    right: 0;
    left: 0;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: stretch;
    font-size: .75rem;
    a{
        color: ${({ theme }) => theme.COLOR.LIGHT.hex};
        margin: auto;
    }

`;