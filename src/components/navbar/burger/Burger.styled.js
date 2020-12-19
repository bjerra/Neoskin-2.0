import styled from "@emotion/styled"

export const StyledBurger = styled.button`

  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  top: 1rem;
  right: 2rem;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 20;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme, open }) => open ? theme.COLOR.LIGHT.hex : theme.COLOR.DARK.hex};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-of-type {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-of-type(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-of-type(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }

  span {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

`;