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
            font-family: "Niveau Grotesk",-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
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
          a {
            color: inherit;
           
          }
          div{
            
          }
          span{
          
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
            
          }
        `}
      />
      {element}
    </ThemeProvider>
  )
}