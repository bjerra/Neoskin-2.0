import styled from "@emotion/styled"

export const StyledServiceCard = styled.div`

position: relative;
background: ${({ theme }) => theme.COLOR.LIGHT.hex};
display: flex;
flex-direction: row;
align-items: center;
text-align: left;
justify-content: space-between;
border-bottom: 1px solid #999;

color: ${({ theme }) => theme.COLOR.DARK.hex};

h4 {
    font-weight: 600;
}
p {
    color: #999;
    display: flex;
    align-items: center;
}

> a {
    text-decoration: none;
    padding: .75rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    flex: 1;
    
}
 > div{
        width: 70px;
        height: 70px;
      
}

svg{
    color: ${({ theme }) => theme.COLOR.INFO.hex};
  
}

`
