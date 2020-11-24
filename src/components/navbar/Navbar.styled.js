import styled from "@emotion/styled"

export const StyledNavbar = styled.div`

  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  display: flex;
  background: ${({ theme }) => theme.COLOR.LIGHT.hex};
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem 0 2rem;
  z-index: 5;

  > div:first-of-type {
      width: 15rem;
  }

  a {
    color: #222222;

    &:hover {
      color: #22222266;
    }
  }

  ul{
    display: flex;
    justify-content: space-around;
  }

  @media screen and (max-width: 1280px) {
    height: 35px;
    }
  @media screen and (max-width: 736px) {
    height: 35px;
      } 
  @media screen and (max-width: 480px) {
    height: 35px;
    }

`;