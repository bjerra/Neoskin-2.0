import styled from "@emotion/styled"
import { Link } from 'gatsby'
export const Wrapper = styled.div`
    position: absolute;
    top:0;
    left:0;
    right: 0;
    bottom:0;
    padding: .5rem;
    background-color: #fff;
    line-height: 1.25;
    border-radius: .5rem; 
    border: 3px solid black;
    display: flex;
    align-items: center;
    justify-items: center;
    flex-direction: column;

`

export const Header = styled.div`
   text-align:center;
   height: 3rem;
   margin-right: 2rem;
`

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    overflow: scroll;   
    height: inherit;
    justify-content: flex-start;

`

export const ListHeader = styled.div`
      
`
export const ListContent = styled.div`
    overflow: hidden;
    transition: all 0.3s ease-out;
    height: auto;
    margin: .5rem;
    flex: ${({ isExpanded }) => isExpanded ? '1' : '0'};   
`

export const VideoContainer = styled.div`
    height: 10rem;
`

export const Close = styled(Link)`
    position: absolute;

    top: 10px;
    right: 10px;
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
    padding-top: .5rem;
`