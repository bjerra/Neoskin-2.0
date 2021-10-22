import React from "react"
import styled from "@emotion/styled"

export const StyledButton = styled.a`
    transition: all .2s ease;

    color: #7e9ed6;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
    font-size:  ${({ size }) => size ? size : '1.25rem' };
`

const Button = ({ slug, size }) => (
    <StyledButton href={`https://www.bokadirekt.se/boka-tjanst/neoskin-33692/${slug}`} size={size} target="_blank" rel="noopener noreferrer">    
        Boka                                    
    </StyledButton>
)


export default Button