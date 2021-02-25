import React from "react"
import styled from "@emotion/styled"

export const StyledButton = styled.a`
    transition: all .2s ease;
    color: #fff;
    background-color: #23A994;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    text-decoration: none;
    font-weight: 600;
    box-shadow: 0px 0px 4px 2px rgba(0,0,0,0.21);

`

const Button = ({ url }) => (
    <StyledButton href={url} target="_blank" rel="noopener noreferrer">    
        Boka                                    
    </StyledButton>
)


export default Button