import styled from "@emotion/styled"
import { Link } from 'gatsby'
export const Wrapper = styled.div`

`

export const Body = styled.div`
    padding-top: 2rem;
    background-color: #fff;
    line-height: 1.25;
    border-radius: .5rem; 
    border: 3px solid black;
    display: flex;
    align-items: center;
    justify-items: center;
    flex-direction: column;
    overflow-y: scroll;
`

export const Close = styled(Link)`
    position: absolute;
    right: 12px;
    top: 12px;
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