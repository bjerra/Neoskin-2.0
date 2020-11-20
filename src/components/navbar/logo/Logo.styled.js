import styled from "@emotion/styled"
import { Link } from "gatsby"

export const StyledLogo = styled(Link)`
  margin: auto 0;
  flex: 0 1 150px;

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.MOBILE}) {
    
    flex: 0 1 200px; 
`