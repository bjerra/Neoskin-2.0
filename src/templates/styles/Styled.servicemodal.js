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
    background: #fff;
    position: absolute;
    left: 0;
    right:0;
    top: ${({ index }) => index * 40}px;
    z-index: ${({ index }) => index};
    transform:  translateY(${({ isExpanded }) => isExpanded ? 'calc(-100% + 40px)' : '0'});  
    

    :last-of-type {
        bottom:0;
        left: 0;
        right:0;
        top: ${({ index }) => index * 40}px;
        z-index: 100;
    }
   
`
export const ListHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;

    svg{
        color: #ccc;
        transform:  rotate(${({ isExpanded }) => isExpanded ? '180DEG' : '0'});  
        position: absolute;
        right: .5rem;
    }
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
    
    opacity: 1;
    font-size: 1.2rem;
    }
    :hover {
    opacity: .8;
    }
`

export const Footer = styled.div`
    z-index:100;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    div{
        width: 60px;
        height: 60px;

        @media screen and (min-width: 980px) {
            width: 90px;
            height: 90px;
        }
    }
    
  
`