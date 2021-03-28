import styled from "@emotion/styled"
import { Link } from 'gatsby'

export const Container = styled.div`
    height: calc(100vh - 55px);
    width: 100%;
    max-width: 1000px;
    background-color: #fff;
    line-height: 1.25;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    margin: auto;

    @media screen and (min-width: 980px) {
        margin-top: 60px;
      }
`

export const ModalContainer = styled.div `
    height: 100%;
    width: 100%;
    background-color: #fff;
    line-height: 1.25;
    overflow: hidden;
    display: flex;
    flex-direction: column;
`

export const Header = styled.div`
   text-align:center;
   padding: 1rem;
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
    box-shadow: 0 0px 3px 0 rgba(0,0,0,.1); 
    transition: all 0.3s ease;
    background: #fff;
    position: absolute;
    left: 0;
    right:0;
    top: ${({ index }) => index * 50}px;
    z-index: ${({ index }) => index};
    transform:  translateY(${({ isExpanded }) => isExpanded ? 'calc(-100% + 50px)' : '0'});  
    

    :last-of-type {
        cursor: auto;
        bottom:0;
    }
   
`
export const ListHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;

    svg{
        color: #ccc;
        transform:  rotate(${({ isExpanded }) => isExpanded ? '180DEG' : '0'});  
        position: absolute;
        right: .5rem;
    }
`
export const ListContent = styled.div`
    
    margin: .5rem 1rem;
    padding  .5rem 1rem;
    height:auto;
  
`

export const VideoContainer = styled.div`
    height: 175px;
    width: 100%;
    @media screen and (min-width: 980px) {
        height: 300px;
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
    z-index:20;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div{
        flex: 1;

        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;

        @media screen and (min-width: 980px) {
            width: 90px;
            height: 90px;
        }
    }
    
  
`