import React from "react"
import { ThemeProvider } from "@emotion/react"
import theme from "./src/themes/main"
import emotionReset from "emotion-reset"
import { Global, css } from "@emotion/core"

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          ${emotionReset}
          *, *::after, *::before {
            box-sizing: border-box;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            font-smoothing: antialiased;
          }

          html,
          body {       
            font-family: "Josefin Sans",-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              Helvetica, Arial, sans-serif, "Apple Color Emoji",
              "Segoe UI Emoji", "Segoe UI Symbol";
            font-size: ${theme.BASE_FONT_SIZE};
            background: ${theme.COLOR.BACKGROUND};
            color: ${theme.COLOR.TEXT};
            @media screen and (min-width: 240px) {
              font-size: 14px;
            }
            @media screen and (min-width: 480px) {
              font-size: 15px;
            }
            @media screen and (min-width: 700px) {
              font-size: 16px;
            }
            @media screen and (min-width: 960px) {
              font-size: 17px;
            }
            @media screen and (min-width: 1184px) {
              font-size: 18px;
            }
          }
          .ReactModal__Overlay {
            opacity: 0;
            transition: opacity 200ms ease-out;
          }
          
          .ReactModal__Overlay--after-open {
            opacity: 1;
          }
          
          .ReactModal__Overlay--before-close {
            opacity: 0;
          }
           
          .ReactModal__Content {
            box-shadow: 0 0 5px 5px rgba(0,0,0,.3); 
            transform: translateY(-100px);
            transition: transform 200ms ease-out;
          }
          
          .ReactModal__Content--after-open {
            transform: translateY(0);
          }
          
          .ReactModal__Content--before-close {
            transform: translateY(100px);
          }
          a {
            color: inherit;
          }
          h1 {
            ${theme.H1};
          }
          h2 {
            ${theme.H2};
          }
          h3 {
            ${theme.H3};
          }
          h4 {
            ${theme.H4};
          }
          h5 {
            ${theme.H5};
          }
          h6 {
            ${theme.H6};
          }
          p {
            ${theme.P};
          }
          pre {
            font-family: monospace;
          }
        `}
      />
      {element}
    </ThemeProvider>
  )
}