import styled from "@emotion/styled"

export const Wrapper =  styled.div`


`

export const ServiceCard = styled.li`

height: 50px;
transition: transform .2s ease;
position: relative;
background: ${({ theme }) => theme.COLOR.LIGHT.hex};
display: flex;
flex-direction: row;
align-items: center;
text-align: left;
justify-content: space-between;
margin-top: 2px;
box-shadow: 1px 1px 2px 0px rgba(0,0,0,0.21);

color: ${({ theme }) => theme.COLOR.DARK.hex};

@media screen and (min-width: 980px) {
  }

> a, .test{
    height: 100%; 
    
    text-decoration: none;
    padding: 0 .75rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
    flex: 1;
    border-right: 1px solid #ddd;
    span {
        transform-origin: left;
        transition: transform .2s ease;
        color: ${({ theme }) => theme.COLOR.INFO.hex};
    }
    h5 {
        font-weight: 600;
    }
    p {
        color: #999;
        display: flex;
        align-items: center;
        font-size: 1.2rem;

        @media screen and (max-width: 980px) {
            font-size: 1rem;
          }
    }
}

> a {
  @media screen and (min-width: 980px) {
    :hover {       
      background-color: #fbfbfb;
        span{
            transform: scale(1.2, 1.2);
           
        }
      }
  }
}
 .boka{
        width: 70px;
        height: 100%;
        font-size: 1.4rem;

       @media screen and (min-width: 980px) {
        width: 120px;
        font-size: 1.75rem;

        :hover {
            >a {
              
                background-color: #fbfbfb;
            }
         
         }
      }

     
      
}


`

export const SubCategory = styled.div`
    
  text-align: center;

  
  @media screen and (min-width: 980px) {
    ul{
      padding: 2rem 5rem 0 5rem;
    }
  }

  h1 {
    z-index: 10;
    position: absolute;
    color: white;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);

  }

  .content {

    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  ui{
    padding-top: 2rem;
  }

`