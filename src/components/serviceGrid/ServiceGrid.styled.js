
import styled from "@emotion/styled"
import { Link } from "gatsby"

export const StyledServiceGrid = styled.div`

  display: flex;
  margin: auto;
  padding: 0 .5rem;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content:space-around;
  align-items: center;
  width: 1200px; 
  max-width: 90%;
  @media screen and (max-width: 980px) {
    width: 100%; 
    max-width: 100%;
    flex-direction: column;
  }
 
`

export const Card = styled(Link)`
 
  
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
    h3 {
      font-weight: 600;
      margin: 0 1rem;
      color: black;
      flex: 1;
    }
  
    @media screen and (min-width: 980px) {
      width: 500px; 
      margin: 1rem;
      :hover {
        opacity: .8;
        transform: scale(1.05, 1.05);
      }
    }

`


export const Image = styled.div`
      height: 200px;
      flex: 2;
      @media screen and (max-width: 980px) {
        height: 150px;
      }

      div{
        height: 100%;
        width: 100%;
      }
      
`