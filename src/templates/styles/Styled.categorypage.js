import styled from "@emotion/styled"

export const Wrapper =  styled.div`


`
export const Header = styled.section`
    
background-image: url(${({ image }) => image});
background-position: center;
background-repeat: no-repeat;
background-size: cover;

text-align: center;

`

export const Body = styled.section`
    

margin: 0 auto;
max-width: 900px; 
padding: 3rem;

@media screen and (max-width: 980px) {
    padding: 1rem 0;
  }

`

export const ServiceCard = styled.div`

height: 80px;
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
    height: 125px;
  }


> a {
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
    h4 {
        font-weight: 600;
        margin-top: .75rem;
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

    @media screen and (min-width: 980px) {
        :hover {       
          background-color: #fbfbfb;
            span{
                transform: scale(1.5, 1.5);
               
            }
          }
      }

  
    
}
 > div{
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