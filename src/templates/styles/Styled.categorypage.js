import styled from "@emotion/styled"

export const Wrapper =  styled.div`

position: relative;
h1{
  word-break: break-word;
}
`

export const ServiceCard = styled.li`

background-color: ${({ theme }) => theme.COLOR.LIGHT};
margin: .5rem;
box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -2px 0px inset;
-webkit-tap-highlight-color: transparent;
-webkit-touch-callout: none;
-webkit-user-select: none;
-khtml-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
cursor: pointer;
transition: transform .1s ease;
position: relative;
width: 160px;
height: 100px;
:hover{
  transform: scale(1.05);
  h4{
    
    color: ${({ theme }) => theme.COLOR.MUSTARD};
  }
  .gatsby-image-wrapper{
  
    filter: grayscale(0%) opacity(1);
 }
}


.gatsby-image-wrapper{
   width: 60px;
   position: absolute;
   bottom:5px;
   right: 5px;
   filter: grayscale(100%) opacity(.5);
   transition: filter .3s ease-in-out ;
   transition-delay: .1s;
}


h4{
  margin-top: .75rem;
  margin-left: .75rem;
  margin-right: 10%;
  color: ${({ theme }) => theme.COLOR.MUSTARD};
  text-align: left;
  font-weight: 300; 
  position: absolute;
  transition: all ease .3s 
 }

text-align: left;


@media screen and (min-width: 980px) {
  width: 225px;
  height: 150px;
  h4{
    color: ${({ theme }) => theme.COLOR.DARK};
  }
  .gatsby-image-wrapper{
    width: 90px;
 }
  }
`
export const Body = styled.section`
  
  text-align: center;
  position: relative;
  padding: 1rem 0 ;
 
  .content {
    margin: auto;
    max-width: 1000px;
    display: flex;
    justify-content: center;
    flex-direction: column;
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
    
  justify-content: center;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  display: flex;

`

export const Modal = styled.div`

transition: opacity .01s ease;
transform:  translate(${({ open }) => open ? '0%' : '100%'});   
transition-delay: ${({ open }) => open ? '0' : '.15s'};
opacity: ${({ open }) => open ? '1' : '0'};  
background-color: #b2c9d6cc;
z-index: 100;
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
display: flex;
justify-content: center;
align-items: center;

 .content{
  position: relative;
  width: 100%;
  padding-top: 1rem;
  opacity: ${({ open }) => open ? '1' : '0'};  
  transition: opacity .1s ease;
  transition-delay: ${({ open }) => open ? '0s' : '0s'};
  max-height: 80%;
  height: fit-content;
  flex-direction: column;
  display: flex;
  max-width: -webkit-fill-available;
   justify-content:center;
   align-items: center;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  ::-webkit-scrollbar {
    display: none;
  }
    background-color: ${({ theme }) => theme.COLOR.LIGHT};

   max-width: 90%;

   @media screen and (min-width: 980px) {
    max-width: 500px;
  }
 }

 .header {
   h2{
    color: ${({ theme }) => theme.COLOR.MUSTARD};
   }
  width: 100%;
 }
 

 .body{
  padding: 1rem;
  width: 100%;
  overflow-x: hidden;
 
}

 .footer{
  background-color: ${({ theme }) => theme.COLOR.INFO};
  padding: 1rem 0;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-around;
  align-items:center;
   width: 100%;
  
   a{
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
   }
 
 }

 .timeprice{
    p{
      font-size: 1.2rem;
      font-weight: 400;
    }
   display: flex;
   flex-direction: column;
   color: ${({ theme }) => theme.COLOR.LIGHT};

 }

 .close {
  position: absolute;
  right: 0px;
  top: -50px;
  width: 32px;
  height: 32px;
  opacity: 0.7;
}
.close:hover {
  opacity: 1;
}
.close:before, .close:after {
  position: absolute;
  left: 15px;
  content: ' ';
  height: 33px;
  width: 2px;
  background-color: #fff;
}
.close:before {
  transform: rotate(45deg);
}
.close:after {
  transform: rotate(-45deg);
}

`
