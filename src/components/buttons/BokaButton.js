import React from "react"
import styled from "@emotion/styled"

export const StyledButton = styled.a`
    transition: all .2s ease;

    color: #5a8abf;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
    font-size: 1.25rem;
`

const Button = ({ url }) => (
    <StyledButton href={url} target="_blank" rel="noopener noreferrer">    
        Boka                                    
    </StyledButton>
)


export default Button