import styled from "@emotion/styled"
import { Link } from 'gatsby'

export const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    padding: .5rem;
    background-color: #fff;
    line-height: 1.25;
    border-radius: .5rem; 
    border: 3px solid black;
    overflow-y: auto;
`

export const Header = styled.div`
   text-align:center;
   height: 3rem;
   margin-bottom: .5rem;
   display: flex;
`

export const Body = styled.div`
   
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height:  ${({ h }) => h}px;
    margin-bottom: 100px;

`
export const ListHeader = styled.h4`
    box-shadow: 0 1px 0 0 rgba(0,0,0,0.21);
    height: 40px;
    display: flex;
    align-items: center;

`
export const ListContent = styled.div`
    overflow: hidden;
    transition: all 0.3s ease-out;
    height: auto;
    flex: ${({ isExpanded }) => isExpanded ? '1' : '0'};   
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
    
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 1rem;
    width: 60px;
    height: 60px;

    @media screen and (min-width: 980px) {
        width: 90px;
        height: 90px;
    }

`