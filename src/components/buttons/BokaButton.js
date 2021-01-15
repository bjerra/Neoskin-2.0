import React from "react"
import styled from "@emotion/styled"

export const StyledButton = styled.a`
    background-color: antiquewhite;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 55px;
    height: 55px;
    text-decoration: none;
    box-shadow: 0px 0px 5px 5px rgba(0,0,0,0.1);
    font-weight: 600;

`

const Button = ({ url }) => (
    <StyledButton href={url} target="_blank" rel="noopener noreferrer">    
        Boka                                    
    </StyledButton>
)


export default Button