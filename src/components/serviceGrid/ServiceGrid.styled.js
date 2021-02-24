
import styled from "@emotion/styled"
import Img from "gatsby-image"
import { Link } from "gatsby"

export const StyledServiceGrid = styled.div`

  display: flex;
  flex-direction: row;
  flex-wrap:wrap;
  @media screen and (max-width: 980px) {
    flex-direction: column;
  }
 
`

export const Card = styled(Link)`
  box-shadow: 10px 10px 28px 0px rgba(0,0,0,0.25);
  transition: transform .2s ease;
  width: 100%;
  display: flex;
  align-items: center;
  :nth-of-type(odd) {
    flex-direction: row-reverse;
  }
  margin-top: .75rem;
  text-align:center;
  text-decoration: none;
    h4 {
      font-weight: 600;
      margin: 0 1rem;
      color: black;
      flex: 1;
    }
  
    @media screen and (min-width: 980px) {
      width: 400px;
      :nth-of-type(odd) {
        margin-right: 50px;
      }
      
      :hover {
        opacity: .8;
        transform: scale(1.05, 1.05);
      }
    }

`


export const Image = styled(Img)`
      height: 250px;
      width 60%;
      @media screen and (max-width: 980px) {
        height: 150px;
      }
`