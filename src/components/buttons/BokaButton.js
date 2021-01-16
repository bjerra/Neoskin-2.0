import React from "react"
import styled from "@emotion/styled"

export const StyledButton = styled.a`
    background-color: #a9a9a947;
    color: #9a5959;
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