
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
  text-decoration: none;
    @media screen and (min-width: 980px) {
      width: 350px; 
      margin: 1rem;
      :hover {
        transform: scale(1.05, 1.05);

        div: after { opacity:0;}
        h4 {
          opacity: .5;
        }
      }
    }

`


export const Image = styled.div`
      position: relative;
      display:flex;
      height: 200px;
      width: 100%; 
      @media screen and (max-width: 980px) {
        height: 150px;
      }

      h4 {
        transition: opacity .3s;
        z-index: 10;
        position: absolute;
        color: white;
        top:.5rem;
        left: 1rem;
      }

      div{
        border-radius: 2px;
        height: 100%;
        width: 100%;
        :after {
          transition: opacity .3s;
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image:  linear-gradient(
            rgba(0, 0, 0, 1),
            rgba(0, 0, 0, .5),
            rgba(0, 0, 0, 0)
          );
          opacity: .7;
      }
      }
      
`