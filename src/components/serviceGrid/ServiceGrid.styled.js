
import styled from "@emotion/styled"
import Img from "gatsby-image"
import { Link } from "gatsby"

export const StyledServiceGrid = styled.div`

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  @media screen and (max-width: 980px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`

export const Card = styled(Link)`
    position: relative;
    overflow: hidden;
    display: grid;
    ::before {
      grid-area: 1 / 1 / 2 / 2;
      content: "";
      padding-bottom: 100%;
      display: block;
    }

    h4 {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
}
`


export const Image = styled(Img)`
      grid-area: 1 / 1 / 2 / 2;
      width: 100%;
      height: 100%;
      object-fit: contain;

`