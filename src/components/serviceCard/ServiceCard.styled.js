import styled from "@emotion/styled"

export const StyledServiceCard = styled.div`

height: 100px;
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
    height: 150px;
    :hover {   
        transform: scale(0.98, 0.98);
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
    
    span {
        transition: transform .2s ease;
        color: ${({ theme }) => theme.COLOR.INFO.hex};
        transform-origin: left;
    }
    h5 {
        font-weight: 600;
        margin-top: .75rem;
    }
    p {
        color: #999;
        display: flex;
        align-items: center;
        font-size: 1.4rem;

        @media screen and (max-width: 980px) {
            font-size: 1rem;
          }
    }

    @media screen and (min-width: 980px) {
        :hover {
            background: #fbfbfb;
            span{
                transform: scale(1.5, 1.5);
            }
          }
      }

  
    
}
 > div{
        width: 65px;
       height: 100%; 
       font-size: 1.4rem;

       @media screen and (min-width: 980px) {
        width: 150px;
        font-size: 1.75rem;

        :hover {
            >a {
                font-size: 2rem;
                background: #eee;
            }
         
         }
      }

     
      
}


`
