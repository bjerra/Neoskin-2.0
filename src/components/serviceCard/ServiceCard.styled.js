import styled from "@emotion/styled"

export const StyledServiceCard = styled.div`

height: 90px;
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
    :hover {   
        background-color: #eee;
      }
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
        transition: transform .2s ease;
        color: ${({ theme }) => theme.COLOR.INFO.hex};
        transform-origin: left;
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
            span{
                transform: scale(1.5, 1.5);
            }
          }
      }

  
    
}
 > div{
        margin: 1rem;
        width: 55px;
        height: 55px; 
        font-size: 1.4rem;

       @media screen and (min-width: 980px) {
        width: 80px;
        height: 80px; 
        font-size: 1.75rem;

        :hover {
            >a {
                transform: scale(1.1, 1.1);
               
            }
         
         }
      }

     
      
}


`
