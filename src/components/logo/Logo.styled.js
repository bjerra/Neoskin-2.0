import styled from "@emotion/styled"
import { Link } from "gatsby"

export const StyledLogo = styled(Link)`
  margin: auto 0;
  flex: 0 1 750px;

  @media screen and (max-width: 1280px) {
    flex: 0 1 750px;
    }
  @media screen and (max-width: 736px) {
    flex: 0 1 500px;
      } 
  @media screen and (max-width: 480px) {
    flex: 0 1 300px;
    }
`