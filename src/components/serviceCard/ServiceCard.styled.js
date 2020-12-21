import styled from "@emotion/styled"

export const StyledServiceCard = styled.div`

display: flex;
flex-direction: column;
justify-content: space-between;
margin: 1rem 2rem 1rem 2rem;

text-align: center;
color: ${({ theme }) => theme.COLOR.DARK.hex};
padding: 1rem;

.header{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    h5{
        
    }
   
}

.body{

    display: flex;
    justify-content: space-around;
}
`