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
width: 250px;
height: 125px;
:hover{
  transform: scale(1.05);
  h3{
    
    color: ${({ theme }) => theme.COLOR.MUSTARD};
  }
  .gatsby-image-wrapper{
  
    filter: grayscale(0%) opacity(1);
 }
}


.gatsby-image-wrapper{
   width: 100px;
   position: absolute;
   bottom:5px;
   right: 5px;
   filter: grayscale(100%) opacity(.6);
   transition: filter .5s ease-in-out ;
   transition-delay: .1s;
}


h3{
  margin-top: 1.5rem;
  margin-left: 1.5rem;
  font-size: 1.4rem;
  margin-right: 30%;
  color: ${({ theme }) => theme.COLOR.MUSTARD};
  text-align: left;
  font-weight: 300; 
  position: absolute;
  transition: all ease .3s 
 }

text-align: left;


@media screen and (min-width: 980px) {
  width: 275px;
  height: 150px;
  h3{
    color: ${({ theme }) => theme.COLOR.DARK};
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
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  display: flex;

`

export const Modal = styled.div`

transition: all .001s ease;
transform:  translate(${({ open }) => open ? '0%' : '100%'});   
transition-delay: ${({ open }) => open ? '0s' : '.15s'};
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
  width: 100%;
  padding-top: 1rem;
  transform:  translateY(${({ open }) => open ? '0%' : '100%'});  
  transition: transform .2s ease;
  transition-delay: ${({ open }) => open ? '.1s' : '0s'};
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
  border-top: 1px solid ${({ theme }) => theme.COLOR.DARK};
  border-bottom: 1px solid ${({ theme }) => theme.COLOR.DARK};
  padding: 1rem 0;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-around;
  align-items:center;
   width: 100%;
  
   a{
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
   }
 
 }

 .timeprice{
    p{
      font-size: 1.2rem;
      font-weight: 400;
    }
   display: flex;
   flex-direction: column;

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
