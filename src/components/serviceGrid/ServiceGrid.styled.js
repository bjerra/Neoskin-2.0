
import styled from "@emotion/styled"
import Img from "gatsby-image"
import { Link } from "gatsby"

export const StyledServiceGrid = styled.div`

  display: flex;
  margin: auto;
  padding: 0 .5rem;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content:space-around;
  align-items: center;
  width: 1000px; 
  max-width: 90%;
  @media screen and (max-width: 980px) {
    width: 100%; 
    max-width: 100%;
    flex-direction: column;
  }
 
`

export const Card = styled(Link)`
  background: #fbf4ec;
  box-shadow: 0 0 2px 1px rgba(0,0,0,0.5);
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
    h5 {
      font-weight: 600;
      margin: 0 1rem;
      color: black;
      flex: 1;
    }
  
    @media screen and (min-width: 980px) {
      width: 400px; 
      margin: 1rem;
      :hover {
        opacity: .8;
        transform: scale(1.05, 1.05);
      }
    }

`


export const Image = styled(Img)`
      height: 200px;
      width 60%;
      @media screen and (max-width: 980px) {
        height: 150px;
      }
`