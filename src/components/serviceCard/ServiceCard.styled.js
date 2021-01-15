import styled from "@emotion/styled"

export const StyledServiceCard = styled.div`

position: relative;
background: ${({ theme }) => theme.COLOR.LIGHT.hex};
display: flex;
flex-direction: row;
align-items: center;
text-align: left;
justify-content: space-between;
margin: 1rem .5rem;
box-shadow: 5px 5px 2px -3px #00000044;

color: ${({ theme }) => theme.COLOR.DARK.hex};

h4 {
    font-weight: 600;
}
p {
    color: #999;
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
        padding: .75rem;
        flex: 0;
    
}

svg{
    color: ${({ theme }) => theme.COLOR.INFO.hex};
    position: absolute;
    left: 50%;
    bottom: 5px;
    transform: translate(-50%, 0);
}

`
