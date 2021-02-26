import styled from "@emotion/styled"
import { Link } from 'gatsby'

export const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    background-color: #fff;
    line-height: 1.25;
    border-radius: .5rem; 
    border: 3px solid black;
    overflow: hidden;
    display: flex;
    flex-direction: column;
`

export const Header = styled.div`
   text-align:center;
   height: 3rem;
   margin-bottom: .5rem;
   display: flex;
`

export const Body = styled.div`
   
    background: #fff;
    width: 100%;
    height: 100%;
    position: relative;

`

export const ListItem = styled.div`
    cursor: pointer;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    box-shadow: 0 0px 3px 0 rgba(0,0,0,.3); 
    transition: all 0.3s ease;
    position: relative;
    background: #fff;
    position: absolute;
    left: 0;
    right:0;
    top: ${({ index }) => index * 40}px;
    z-index: ${({ index }) => index};
    transform:  translateY(${({ isExpanded }) => isExpanded ? 'calc(-100% + 40px)' : '0'});  

   
`
export const ListHeader = styled.h4`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
`
export const ListContent = styled.div`
    
    margin: .5rem 0;
    padding  .5rem 1rem;
    height:auto;
  
`

export const VideoContainer = styled.div`
    height: 175px;
    width: 100%;
    @media screen and (min-width: 980px) {
        height: 250px;
      }
`

export const Close = styled(Link)`
    
    position: relative;
    float: right;
    width: 32px;
    height: 32px;
    opacity: 1;
    }
    :hover {
    opacity: .8;
    }
    :before, :after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 33px;
    width: 2px;
    background-color: #333;
    }
    :before {
    transform: rotate(45deg);
    }
    :after {
    transform: rotate(-45deg);
    }
`

export const Footer = styled.div`
box-shadow: 0 0px 5px 0 rgba(0,0,0,.3); 
    position: absolute;
    bottom:0;
    left: 0;
    right:0;
    background: #fff;
    top: ${({ index }) => index * 40}px;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    
    div{
        width: 60px;
        height: 60px;

        @media screen and (min-width: 980px) {
            width: 90px;
            height: 90px;
        }
    }
    
  
`