import { css } from "@emotion/core"

// == Colors == //
// Example from Coolors: https://coolors.co/011627-fdfffc-2ec4b6-e71d36-ff9f1c


const RICH_BLACK = {
  hex: "#011627",
  rgb: `rgb(1, 22, 39)`,
  rgbArray: [1, 22, 39],
}

const BABY_POWDER = {
  hex: "#FDFFFC",
  rgb: `rgb(253, 255, 252)`,
  rgbArray: [253, 255, 252],
}

const BLUE = {
  hex: "#1b2a40",
  rgb: `rgb(46,196,182)`,
  rgbArray: [46, 196, 182],
}

const HOVER = {
  hex: "#904949",
  rgb: `rgb(235, 225, 52)`,
  rgbArray: [235, 225, 52],
}

const ROSE_MADDER = {
  hex: "#748fbf",
  rgb: `rgb(231,29,54)`,
  rgbArray: [231, 29, 54],
}

const ORANGE_PEEL = {
  hex: "#FF9F1C",
  rgb: `rgb(255,159,28)`,
  rgbArray: [255, 159, 28],
}

const MENU = {
  hex: "#fbf0f0",
  rgb: `rgb(255,159,28)`,
  rgbArray: [255, 159, 28],
}

const MENU_INVERT = {
  hex: "#000",
  rgb: `rgb(255,159,28)`,
  rgbArray: [255, 159, 28],
}


const COLOR = {
  LIGHT: BABY_POWDER,
  DARK: RICH_BLACK,
  BLUE: BLUE,
  HOVER: HOVER,
  INFO: ROSE_MADDER,
  MENU: MENU,
  MENU_INVERT:MENU_INVERT,
  FEATURE: [ROSE_MADDER, ORANGE_PEEL],
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
  font-weight: 500;
  margin-bottom: 0.4em;

  @media screen and (max-width: ${BREAKPOINTS.MOBILE}) {
    font-size: 1.7em;
  }
`

const H2 = css`
  font-family: Quicksand;
  font-size: 2.157em;
  font-weight: 500;
  margin-bottom: 0.4em;

  @media screen and (max-width: ${BREAKPOINTS.MOBILE}) {
    font-size: 1.559em;
  }
`

const H3 = css`
font-family: Quicksand;
  font-size: 1.769em;
  font-weight: 600;
  margin-bottom: 0.4em;

  @media screen and (max-width: ${BREAKPOINTS.MOBILE}) {
    font-size: 1.309em;
  }
`

const H4 = css`
font-family: Quicksand;
  font-size: 1.377em;
  font-weight: 500;
  margin-bottom: 0.4em;

  @media screen and (max-width: ${BREAKPOINTS.MOBILE}) {
    font-size: 1.209em;
  }
`

const H5 = css`
  font-family: Quicksand;
  font-size: 1em;
  font-weight: 500;
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


export default { COLOR,PADDING, MARGIN,BASE_FONT_SIZE,H1, H2, H3, H4, H5, H6,P,WRAPPER_WIDTH, BREAKPOINTS }