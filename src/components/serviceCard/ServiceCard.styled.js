import styled from "@emotion/styled"

export const StyledServiceCard = styled.div`

background: ${({ theme }) => theme.COLOR.LIGHT.hex};
display: flex;
flex-direction: row;
align-items: center;
text-align: left;
justify-content: space-between;
margin: 1rem .5rem;
box-shadow: 5px 5px 2px -3px #00000044;
padding: .75rem;

color: ${({ theme }) => theme.COLOR.DARK.hex};

h5 {
    font-weight: 600;
}
p {
    color: #999;
}

a {
    color: ${({ theme }) => theme.COLOR.INFO.hex};
}
div{
    display: flex;
    
    flex-direction: column;
   
    
    justify-content: space-between;

    :nth-of-type(1) {
        flex: 1;
      }
    :nth-of-type(2) {
        flex: 0;
    }

}

`
