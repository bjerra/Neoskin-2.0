import styled from "@emotion/styled"
import { css } from "@emotion/react"

export const Wrapper = styled.div`

  position: relative;
  display: inline-block;
  height: 100%;
  width: 100%;

  
`

export const Content = styled.div`
  background-color: ${({ theme }) => theme.COLOR.MENU_BACKGROUND};
  z-index: 1;
  transform: ${({ expanded }) => expanded ? 'scaleY(1)' : 'scaleY(0)'};
  transition: transform 0.2s ease-in-out;
  padding-bottom: 1rem;
  .item {
    color: ${({ theme }) => theme.COLOR.MENU_TEXT};
    :hover{
     
      a{
        color: ${({ theme }) => theme.COLOR.HOVER};
        :before{
          background-color: ${({ theme }) =>  theme.COLOR.HOVER};
        }
      }
     
     
    }  
   

    a {
      :before{
        content:'';
        position:absolute;
        display:block;
        top:50%;
        height:1px;
        width: 10px;
        background-color: ${({ theme }) => theme.COLOR.MENU_TEXT};
        left:.5rem;
        z-index:1;
      }    

      display: flex;
      padding: .75rem 0 1rem 1.5rem;  
      font-size: 1.1rem;

      flex-direction: row;
      justify-content: flex-start;

      @media screen and (max-width: 980px) {
        
      }
    }

    .boka{
      color: ${({ theme }) => theme.COLOR.HIGHLIGHT};
      :before{
       
        background-color: ${({ theme }) => theme.COLOR.HIGHLIGHT};

      }    
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
    font-weight: 200;
    transform-origin: top;
    box-shadow: 5px 5px 5px 1px rgba(0,0,0,0.15);
  
    a {
      border-top: 1px solid #00000022;
      }    
`

export const  ascending = css`
  
    width: 100%;
    position: fixed;
    bottom: 55px;
    font-weight: 400;
    left: 0;
    right:0;
    transform-origin: bottom;
    box-shadow: 0 -5px 5px 1px rgba(0,0,0,0.15);

    a {
      border-bottom: 1px solid #00000022;
      }   
`

export const Button = styled.div`
  
  color: ${({ theme, expanded }) => expanded ? theme.COLOR.HOVER : theme.COLOR.MENU_TEXT};
  height: 100%;
  width: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({ down }) => down ? 'row' : 'column'};

 
`