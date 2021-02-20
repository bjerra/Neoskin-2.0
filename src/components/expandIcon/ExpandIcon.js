import styled from "@emotion/styled"
import React, {useState, useRef} from 'react';


const StyledExpandIcon = styled.div`

position: relative;
margin-left: 1rem;
   
  div{
      position: absolute;
      top: 50%;
      left: 50%;
      width: 1.25rem;
      height: 0.12rem;
      background: #333;
      border-radius: 5px;
      transition: all 0.2s ease-out;

      :first-of-type {
          transform: translate(-50%, -50%) ${({ expanded }) => expanded ? 'rotate(0)' : 'rotate(180deg)'};
        }
    
        :nth-of-type(2) {
            transform: translate(-50%, -50%) ${({ expanded }) => expanded ? 'rotate(0)' : 'rotate(270deg)'};
        }
  }
  
`

const ExpandIcon = ({expanded}) => {
 
  return (
        <StyledExpandIcon expanded={expanded}>
            <div />
            <div />   
        </StyledExpandIcon>   
  )
}

export default ExpandIcon;

