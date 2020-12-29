import styled from "@emotion/styled"

export const StyledMobile = styled.div`
    
    background: ${({ theme }) => theme.COLOR.DARK.hex};
    z-index: 10;
    position: fixed;
    transform: ${({ expanded }) => expanded ? 'translateY(0)' : 'translateY(50%)'};
    transition: transform 0.2s ease-out;
    bottom:0;
    right: 0;
    left: 0;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;
    font-size: .75rem;

    .row {
        height:100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    a{
        color: ${({ theme }) => theme.COLOR.LIGHT.hex};
        margin: auto;
        width: 100%;
        height: 100%;
        display: inline-block;
        display: flex;
        justify-content: center;
        align-items: center;
    }

`;