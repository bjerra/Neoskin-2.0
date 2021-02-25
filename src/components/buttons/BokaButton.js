import React from "react"
import styled from "@emotion/styled"

export const StyledButton = styled.a`
    transition: all .2s ease;

    background-color: #afcbea;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    text-decoration: none;
    box-shadow: 0px 0px 0 2px rgba(0,0,0,0.21);
    font-size: 1.25rem;

`

const Button = ({ url }) => (
    <StyledButton href={url} target="_blank" rel="noopener noreferrer">    
        Boka                                    
    </StyledButton>
)


export default Button