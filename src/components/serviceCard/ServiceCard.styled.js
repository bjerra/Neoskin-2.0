import styled from "@emotion/styled"

export const StyledServiceCard = styled.div`

height: 80px;
position: relative;
background: ${({ theme }) => theme.COLOR.LIGHT.hex};
display: flex;
flex-direction: row;
align-items: center;
text-align: left;
justify-content: space-between;
border-bottom: 2px solid #ddd;

color: ${({ theme }) => theme.COLOR.DARK.hex};



> a {
    height: 100%; 
    
    text-decoration: none;
    padding: 0 .75rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
    flex: 1;


    div {
        
    }
    h5 {
        font-weight: 600;
        margin-top: .75rem;
    }
    p {
        color: #999;
        display: flex;
        align-items: center;
        
    }
    
}
 > div{
        width: 65px;
       height: 100%; 
      
}

svg{
    color: ${({ theme }) => theme.COLOR.INFO.hex};
}

`
