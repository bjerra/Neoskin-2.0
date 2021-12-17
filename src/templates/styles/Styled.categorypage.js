import styled from "@emotion/styled"

export const Wrapper =  styled.div`

position: relative;
h1{
  word-break: break-word;
}
`

export const ServiceCard = styled.li`
box-shadow: 3px 3px 5px 1px rgba(0,0,0,0.25);
pointer-events: ${({ clickable }) => clickable ? 'all' : 'none'};
-webkit-tap-highlight-color: transparent;
-webkit-touch-callout: none;
-webkit-user-select: none;
-khtml-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
cursor: pointer;
height: 100px;
padding-left: 1rem;
transition: transform .2s ease;
position: relative;
background: ${({ theme }) => theme.COLOR.LIGHT};

.pricing {
  display:flex;
  justify-content: space-between;
  margin-right: 2rem;
  color: ${({ theme }) => theme.COLOR.MUSTARD};
  p{
    flex: 1;
  }
  span{
    flex: 1;
  }
}

h3{
  color: ${({ theme }) => theme.COLOR.DARK};
  text-align: left;
  font-weight: 500; 
 }

display: flex;
flex-direction: row;
align-items: center;
text-align: left;
justify-content: space-between;
margin-top: 2px;
border-bottom: 1px solid #bbb;
border-radius: 5px;
width: 100%;

color: ${({ theme }) => theme.COLOR.DARK};

.noInfo, .info{
  height: 100%; 
  text-decoration: none;
  padding: 1rem .75rem;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  position: relative;
  flex: 1;
  border-right: 2px dotted ${({ theme }) => theme.COLOR.BACKGROUND};;

}
  p {
     
      font-size: 1.1rem;
      @media screen and (max-width: 980px) {
          font-size: 1rem;
        }
  }

  h3 {
    word-break: break-word;
    @media screen and (min-width: 980px) {
      font-size: 1.1rem;
      }
}

  span {
    transform-origin: left;
    transition: transform .2s ease;
    color: ${({ theme }) => theme.COLOR.DIM_BLUE};
    font-size: 1.1rem;
}

 .info{
  
 
   :hover{     
      span{
        color: ${({ theme }) => theme.COLOR.INFO};
          transform: scale(1.2, 1.2); 
    }
   }
 }

@media screen and (min-width: 980px) {
  max-width: 500px;
  min-width: 400px;
  height: 120px;
  }

 .boka{
        width: 60px;
        height: 100%;
        font-size: 1.4rem;
        
       @media screen and (min-width: 980px) {
        width: 120px;
        font-size: 1.75rem;

        :hover {
          opacity : .7;
         
         }
      }
    }
}
`
export const Body = styled.section`
  
  text-align: center;
  position: relative;
  padding: 1rem;
 
  .content {
    margin: auto;
    max-width: 800px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  ui{
    padding-top: 2rem;
  }

  .description{
    
  }

  .header {
    display: flex;
    justify-content: space-between;
  }

  .brand{
    width: 150px;
    float: right;
  }

`

export const ServiceList = styled.ul`
    
  margin: .5rem 0;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;

`

export const Modal = styled.div`
max-height: 80%;
height: fit-content;

::-webkit-scrollbar {
  display: none;
}
border-radius: 10px;
 transition: transform .2s ease;
 transform:  scaleY(${({ open }) => open ? '1' : '0'});  
  position: fixed;
  top: 50px;
  left: 50px;
  right: 50px;
  bottom: 100px;
  z-index: 100;
  background-color: ${({ theme }) => theme.COLOR.INFO};;
 display: flex;
 max-width: 600px;
 margin: auto;

 > div{
  
  flex-direction: column;
  display: flex;
  max-width: -webkit-fill-available;
   justify-content:center;
   align-items: center;
  margin: 1rem 1.5rem;

 }
 .header {
  width: 100%;
 }

 .body{
  overflow-y: scroll;
  overflow-x: hidden;
 

  @media screen and (min-width: 980px) {
    padding: 1rem;
  }
  > * {
    padding-top: .5rem;
  }
}

 .footer{
   width: 100%;
   a{
     margin: auto;
     margin-top: .5rem
   }
 
 }

`

export const StyledBokaButton = styled.a`
    transition: all .2s ease;

    background-color:  ${({ theme }) => theme.COLOR.LIGHT};
    color:  ${({ theme }) => theme.COLOR.HIGHLIGHT};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    text-decoration: none;
    font-size: 1.25rem;
    border-radius: 5px;
`
