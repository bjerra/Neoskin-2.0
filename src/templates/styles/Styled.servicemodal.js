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
    display: flex;
    align-items: center;
    justify-items: center;
    flex-direction: column;
    overflow: scroll; 

`

export const Header = styled.div`
   text-align:center;
   height: 3rem;
   margin-right: 2rem;
`

export const Body = styled.div`
    display: flex;
    flex-direction: column;  
    height: 500px;
    justify-content: flex-start;

`

export const ListHeader = styled.div`
      flex:0
`
export const ListContent = styled.div`
    overflow: hidden;
    transition: all 0.3s ease-out;
    height: auto;
    margin: .5rem;
    flex: ${({ isExpanded }) => isExpanded ? '1' : '0'};   
`

export const VideoContainer = styled.div`
    height: 200px;
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
    
    width: 100%;
    height: 40px;

`