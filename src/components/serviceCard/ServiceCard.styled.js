import styled from "@emotion/styled"

export const StyledServiceCard = styled.div`

display: flex;
flex-direction: column;
justify-content: space-between;
margin: 5rem 2rem;

text-align: center;
color: #fff;
height:300px;
background: #3a517d;
box-shadow: 12px 20px 16px -4px rgba(0,0,0,0.32);
padding: 1rem;

.header{
    display: flex;
    justify-content: space-between;

    img{
        width: 150px;
    }
}

.body{

    display: flex;
    flex-direction: column;
    justify-content: center;
}
`