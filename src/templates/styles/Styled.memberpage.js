import styled from "@emotion/styled"

export const Wrapper =  styled.div`
    background-color: #111111;
    color: rgba(255, 255, 255, 0.5);
    align-items: center;
    display: flex;
    justify-content: center;
    background-image: url(${({ image }) => image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-top: 0;
    height: 100vh;
    overflow: hidden;
    position: relative;
    text-align: center;
    width: 100%; 

`