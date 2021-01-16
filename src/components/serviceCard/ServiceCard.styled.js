import styled from "@emotion/styled"

export const StyledServiceCard = styled.div`

height: 65px;
position: relative;
background: ${({ theme }) => theme.COLOR.LIGHT.hex};
display: flex;
flex-direction: row;
align-items: center;
text-align: left;
justify-content: space-between;
border-bottom: 1px solid #999;

color: ${({ theme }) => theme.COLOR.DARK.hex};

h5 {
    font-weight: 600;
}
p {
    color: #999;
    display: flex;
    align-items: center;
}

> a {
    height: 100%; 
    margin-top: .5rem;
    text-decoration: none;
    padding: 0 .75rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
    flex: 1;
    
}
 > div{
        width: 65px;
       height: 100%; 
      
}

svg{
    color: ${({ theme }) => theme.COLOR.INFO.hex};
}

`
