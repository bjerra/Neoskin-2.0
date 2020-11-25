import styled from "@emotion/styled"

export const StyledServiceCard = styled.div`

display: flex;
flex-direction: column;
justify-content: space-between;
margin: 1rem 2rem 4rem 2rem;

text-align: center;
color: #fff;
height:300px;
background: #3a517d;
box-shadow: 0px 10px 28px 4px rgba(0,0,0,0.21);
padding: 1rem;

.header{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    

    img{
        display: block;
        max-width:150px;
        max-height:30px;
        width: auto;
        height: auto;
        
    }
    h5{
        margin: 1rem;
    }
   
}

.body{

    display: flex;
    flex-direction: column;
    justify-content: center;
}
`