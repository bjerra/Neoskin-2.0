import React from "react"
import styled from "@emotion/styled"

export const StyledButton = styled.a`
    transition: all .2s ease;

    background-color:  ${({ theme }) => theme.COLOR.HIGHLIGHT};
    color:  ${({ theme }) => theme.COLOR.LIGHT};
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${({ large }) => large ? '60' : '40' }px;
    width: ${({ large }) => large ? '60' : '40' }px;
    text-decoration: none;
    border-radius: ${({ large }) => large ? '30' : '20' }px;
    font-size:  ${({ size }) => size ? size : '1.25rem' };
`

const Button = ({ url, slug, size, large }) => (
    <StyledButton href={url || `https://www.bokadirekt.se/boka-tjanst/neoskin-33692/${slug}`} size={size} large={large} target="_blank" rel="noopener noreferrer">    
        Boka                                    
    </StyledButton>
)


export default Button