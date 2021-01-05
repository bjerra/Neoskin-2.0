import React from "react"
import styled from "@emotion/styled"

export const StyledButton = styled.a`
    background-color: antiquewhite;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    text-decoration: none;
    box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.10);
    font-weight: 600;

`

const Button = ({ url }) => (
    <StyledButton href={url} target="_blank" rel="noopener noreferrer">    
        Boka                                    
    </StyledButton>
)


export default Button