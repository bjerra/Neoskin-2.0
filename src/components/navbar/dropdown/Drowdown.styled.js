import styled from "@emotion/styled"
import { css } from "@emotion/react"

export const Wrapper = styled.div`

  position: relative;
  display: inline-block;
  height: 100%;
  width: 100%;
  
  
`

export const Content = styled.div`
  padding-bottom: 1rem;
  padding-top: 1rem;
  background-color: ${({ theme }) => theme.COLOR.MENU.hex};
  z-index: 1;
  transform: ${({ expanded }) => expanded ? 'scaleY(1)' : 'scaleY(0)'};
  transition: transform 0.2s ease-in-out;
  .item {
    color: ${({ theme }) => theme.COLOR.MENU_INVERT.hex};
    :hover{
      background-color:#00000011;

    }  

    a {
      :before{
        content:'';
        position:absolute;
        display:block;
        top:50%;
        height:1px;
        width: 10px;
        background:#00000044;
        left:1rem;
        z-index:1;
      }    
      :after {
        content:'';
        position:absolute;
        display:block;
        top:50%;
        margin-top: -10px;
        height:20px;
        width: 20px;
        border-radius: 10px;
        background:#00000011;
        right: 1rem;
        z-index:1;
      }
   
      display: flex;
      padding: .75rem;  
      padding-left: 2rem;
      font-size: 1.15rem;
      flex-direction: row;
      justify-content: flex-start;
    }
      transform: ${({ expanded, down }) => expanded ? 'translateY(0)' : `translateY(${down ? '-100%' : '100%'})`};
      opacity: ${({ expanded }) => expanded ? '1' : '0'};
      transition: all 0.2s ease;
      transition-delay: ${({ index })=> index * 30}ms;
  }
  
`
export const descending = css`
    position: absolute;
    top:60px;
    width: 100%;
    transform-origin: top;
    box-shadow: 5px 5px 5px 1px rgba(0,0,0,0.15);
    border-top: 1px solid #00000022;
`

export const  ascending = css`
    border-bottom: 1px solid #00000022;
    width: 100%;
    position: fixed;
    bottom: 50px;
    left: 0;
    right:0;
    transform-origin: bottom;
    box-shadow: 0 -5px 5px 1px rgba(0,0,0,0.15);
`

export const Button = styled.div`
  
  color: ${({ theme, expanded }) => expanded ? theme.COLOR.HOVER.hex : theme.COLOR.MENU_INVERT.hex};
  height: 100%;
  width: 100%;
  cursor: pointer;
  display: flex;
  justify-content: ${({ down }) => down ? 'flex-start' : 'space-around'};
  align-items: center;
  flex-direction: ${({ down }) => down ? 'row' : 'column'};

 
`