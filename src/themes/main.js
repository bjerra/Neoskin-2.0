import { css } from "@emotion/react"

// == Colors == //
// Example from Coolors: https://coolors.co/011627-fdfffc-2ec4b6-e71d36-ff9f1c


const Off_WHITE = "#fffdf6"
const CREAMY = "#e4d8be"
const OAK = "#d6c796"
const MUSTARD = "#a18a5b"
const TOBACCO = "#363330"
const APRICOT_STING = "#fe9a66"
const SOFT_BLUE = "#b2c9d6"
const DIM_BLUE = "#80a5bc"
const MISTY_BLUE = "#495e6b"
const INDIGO = "#374750"


const COLOR = {
  LIGHT: Off_WHITE,
  DARK: INDIGO,
  HOVER: CREAMY,
  INFO: SOFT_BLUE,
  HIGHLIGHT: APRICOT_STING,
  MENU_BACKGROUND: TOBACCO,
  MENU_TEXT:Off_WHITE,
  FEATURE: OAK,
  TEXT: TOBACCO,
  BACKGROUND: CREAMY,
  FOOTER: TOBACCO,
  DIM_BLUE: DIM_BLUE,
  MISTY_BLUE: MISTY_BLUE,
  OAK: OAK,
  MUSTARD: MUSTARD
}

const BREAKPOINTS = {
  MOBILE: `${600}px`,
  TABLET: `${768}px`,
  DESKTOP:`${992}px` ,
  WIDE: `${1200}px`
}

// == Units of Measurement == //
const unit = 1
const units = {
  "100": `${unit * 0.5}rem`,
  "200": `${unit}rem`,
  "300": `${unit * 1.5}rem`,
  "400": `${unit * 2}rem`,
  "500": `${unit * 3}rem`,
  "600": `${unit * 4}rem`,
  "700": `${unit * 5}rem`,
  "800": `${unit * 6}rem`,
  "900": `${unit * 7.5}rem`,
}

const PADDING = { ...units }
const MARGIN = { ...units }

// == Typography == //
// Using 'Perfect 4th' scaling (1.333) – Read more at type-scale.com
const BASE_FONT_SIZE = `${18}px`

const H1 = css`
  font-family: Quicksand;
  font-size: 2.509em;
  margin-bottom: 0.4em;

  @media screen and (max-width: ${BREAKPOINTS.MOBILE}) {
    font-size: 2.1em;
  }
`

const H2 = css`
  font-family: Quicksand;
  font-size: 2.157em;
  margin-bottom: 0.4em;

  @media screen and (max-width: ${BREAKPOINTS.MOBILE}) {
    font-size: 1.559em;
  }
`

const H3 = css`
font-family: Quicksand;
  font-size: 1.469em;
  margin-bottom: 0.4em;

  @media screen and (max-width: ${BREAKPOINTS.MOBILE}) {
    font-size: 1.309em;
  }
`

const H4 = css`
font-family: Quicksand;
  font-size: 1.177em;
  margin-bottom: 0.4em;

  @media screen and (max-width: ${BREAKPOINTS.MOBILE}) {
    font-size: 1.109em;
  }
`

const H5 = css`
  font-family: Quicksand;
  font-size: 1em;
  margin-bottom: 0.4em;

  @media screen and (max-width: ${BREAKPOINTS.MOBILE}) {
    font-size: 1.009em;
  }
`

const H6 = css`
font-family: Quicksand;
  font-size: 0.75em;
  margin-bottom: 0.4em;

  @media screen and (max-width: ${BREAKPOINTS.MOBILE}) {
    font-size: 2.209em;
  }
`

const P = css`
  font-size: 1em;
  line-height: 1.4;
  margin-bottom: 0.4em;
`
// == Broad Defaults == //
const WRAPPER_WIDTH = `${1184}px`

const theme = { COLOR,PADDING, MARGIN,BASE_FONT_SIZE,H1, H2, H3, H4, H5, H6,P,WRAPPER_WIDTH, BREAKPOINTS }

export default theme