import styled from "@emotion/styled"

export const Wrapper = styled.div`

  position: relative;
  display: inline-block;
  height: 100%;
  width: 100%;

`

export const Content = styled.div`

  position: fixed;
  background-color: ${({ theme }) => theme.COLOR.DARK.hex};
  bottom: 100px;
  left: 0;
  right:0;
  z-index: 1;
  transform: ${({ expanded }) => expanded ? 'scaleY(1)' : 'scaleY(0)'};
  transition: transform 0.2s ease-in-out;
  transform-origin: bottom;

`

export const Button = styled.div`
  
 color: ${({ theme, expanded }) => expanded ? theme.COLOR.HOVER.hex : theme.COLOR.DARK.hex};
    
  height: 100%;
  width: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content:space-around;
  align-items: center;
  
  .icon {
      height: 20px;
    position: relative;
    div{
        position: absolute;
        top: 50%;
        left: 50%;
        width: 1.25rem;
        height: 0.12rem;
        background: ${({ theme, expanded }) => expanded ? theme.COLOR.HOVER.hex : theme.COLOR.DARK.hex};
        border-radius: 5px;
        transition: all 0.2s ease-out;

        :first-of-type {
            transform: translate(-50%, -50%) ${({ expanded }) => expanded ? 'rotate(0)' : 'rotate(180deg)'};
          }
      
          :nth-of-type(2) {
              transform: translate(-50%, -50%) ${({ expanded }) => expanded ? 'rotate(0)' : 'rotate(270deg)'};
          }
    }

}
`

export const ListItem = styled.div`
    color: ${({ theme }) => theme.COLOR.DARK.hex};
   
  a {
    padding: 1rem;  
    font-size: 1rem;
  }
    border-bottom: 1px solid #dddddd33;
    transform: ${({ expanded }) => expanded ? 'translateX(0)' : 'translateX(100%)'};
    opacity: ${({ expanded }) => expanded ? '1' : '0'};
    transition: all 0.2s ease;
    transition-delay: ${({ index })=> index * 20}ms;

`