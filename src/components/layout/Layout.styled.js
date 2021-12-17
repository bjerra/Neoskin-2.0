import styled from "@emotion/styled"

export const Wrapper = styled.div`

font-family: "Niveau Grotesk";
margin: 0;

    h1{
        text-align: center;   
        color: ${({ theme }) => theme.COLOR.LIGHT}; 
        font-weight: 500;
    }
    h2{
        text-align: center;   
        color: ${({ theme }) => theme.COLOR.LIGHT}; 
        font-weight: 300;
    }

    h3{
        text-align: center;   
        color: ${({ theme }) => theme.COLOR.MENU_TEXT}; 
        font-weight: 300;
    }
    h4{
        color: ${({ theme }) => theme.COLOR.MENU_TEXT}; 
        font-weight: 300;
    }

    h5{
        text-align: center;   
        color: ${({ theme }) => theme.COLOR.INFO};
        font-weight: 300; 
    }

    p {
        font-weight: 300; 
    }
    .numbers {
        font-family: gill-sans-nova, sans-serif;

        font-weight: 500;

        font-style: normal;
   }
`

export const Body = styled.div`

 
 section{
    background-color: ${({ theme }) => theme.COLOR.BACKGROUND}; 
    z-index:1;
   
    ::before {
        content:""; /* required for ::before */
        position:absolute; /* don't scroll with page */
        z-index:-1; /* place behind elements on page */
        left:0;
        right: 0;
        top:0;
        bottom: 0;
        background-image: 
        radial-gradient(circle farthest-side at bottom right, #fffdf6aa, #e4d8becc), radial-gradient(ellipse farthest-corner at 0% 100%, #fffdf6aa, #e4d8becc);
        animation:bg-change 10s infinite;
    }
    
    @keyframes bg-change {
    0%, 100% {
        filter:hue-rotate(0deg);
    }
    50% {
        filter:hue-rotate(-15deg);
    }
    }
}
.inner {
    margin:    0 auto;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    max-width: 800px;
  
}
`