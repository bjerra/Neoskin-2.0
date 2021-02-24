import React from "react"
import styled from "@emotion/styled"

export const StyledButton = styled.a`
transition: all .2s ease;
    background-color: #e8e8e847;
    color: #23A994;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
    font-weight: 600;

`

const Button = ({ url }) => (
    <StyledButton href={url} target="_blank" rel="noopener noreferrer">    
        Boka                                    
    </StyledButton>
)


export default Button